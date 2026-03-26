## TypeScript初体验

笔者一直以来是使用JS+VUE的形式进行开发。 在刚开始，JS 灵活的特点是一个很大的惊喜，它的包容性极强，这在代码中体现就是你的编写会相对自由很多。但随着项目变大，笔者频繁地遇到类似的问题和缺陷：

各种隐式转换带来的风险，this指向的混乱（箭头函数伟大），包括合作开发时，编码风格不同带来了理解的困难，代码合并时会让人很头痛，出现问题要 console.log多次打印去猜测变量类型、排查错误代码段。笔者在刚接手项目时，面对"老资历们"留下来的代码，往往要生吃硬啃，十分不适。

也正是JavaScript在实际开发中的一些痛点，促成了 **TypeScript** 的诞生。

通过查阅官方文档，笔者对整个 TypeScript 的知识体系有了一个模糊的摸索，更深入的了解需要结合实际开发过程了。

## 基础类型

TypeScript 给 JavaScript 带来了静态类型，最基础的：布尔、数字、字符串、数组、对象，比较特殊的类似元祖、枚举、Any、Void、Null、Undefined、Never。

```
let name: string = '小明';
let age: number = 18;
let isDone: boolean = false;
let u: undefined = undefined;
let n: null = null;
let notSure: any = '可以是任何类型';   // any 要慎用
......
```

其中要格外注意`any` 的滥用。 `any` 用多了等于没用 TS。在一些情况下使用 `unknown` 替代 `any`，`unknown` 比 `any` 安全，因为它要求你先进行类型收窄才能使用：

```
let value: unknown = 'hello';
// console.log(value.toUpperCase());报错， unknown 类型没这个方法
if (typeof value === 'string') {
  console.log(value.toUpperCase()); // 成功
}
```

#### 类型断言

类型断言有两种形式。 其一是“尖括号”语法：

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

另一个为`as`语法：

```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

两种形式是等价的。这种形式就是告诉TypeScript，我知道这个变量是什么类型，它现在不满足一些要求没关系，你别管别报错。

------

## 变量声明

TS 中的变量声明和 ES6 一样，有 `let` 和 `const`。但多了**类型注解**和**类型推断**。

```
// 显式注解
let count: number = 0;

// 类型推断
let name = '张三'; // TS 自动推断为 string
```

类型推断是 TS 一个很贴心的功能，省去了不少写类型注解的功夫。但需要注意，有时候推断的结果可能不是你想要的，比如：

```
let arr = [];   // 推断为 any[]
arr.push(1);
arr.push('a');  // 这里不会报错，但数组变成了 (number|string)[]
```

为了避免这种情况，在声明空数组时显式指定类型：

```
let arr: number[] = [];
```

------

## 接口（Interface）

接口是 TypeScript 最常用的特性之一，用来定义对象、类等的结构。

```
interface User {
  id: number;
  name: string;
  email?: string;        // 可选属性
  readonly createdAt: Date; // 只读属性
}
```

一开始写接口很麻烦，但接口实际上更类似于一种提供模版或者划下法条的作品，你得满足接口提出的要求。通过定义接口，在函数中定义返回值的类型，调用者一眼就能知道返回了什么，不需要去看实现。还有类似于调用请求的传参等。

接口的特性：**声明合并**。这意味着你可以多次定义同一个接口，TS 会自动把它们合并。

```
interface Window {
  a: string;
}
interface Window {
  b: string;
}
```

------

## 类（Class）

TS 对 ES6 的类做了增强，增加了访问修饰符 `public`、`private`、`protected` 和抽象类等概念。

```
class Animal {
  constructor(public name: string) {}
  move() {
    console.log(`${this.name} is moving`);
  }
}
class Dog extends Animal {
  bark() {
    console.log('汪汪汪!');
  }
}
```

笔者理解，类比接口更进了一层，类更关注于具体的实现。

注意类的继承以及super关键字。

抽象类是不能被实现的，只能被继承，子类必须实现抽象类中的抽象方法。

类的修饰符 `private` 和 `protected` 可以帮助我们封装内部逻辑，避免外部直接修改。

------

## 函数

函数是 JavaScript 的基础，TS 的函数类型可以明确参数和返回值的类型。

```
function greet(name: string, age?: number): string {
  return `Hello, ${name}`;
}

// 箭头函数
const add = (a: number, b: number): number => a + b;
```

定义函数时，一个常见情况是**函数重载**。有时同一个函数根据参数类型不同，返回类型也不同。TS 支持函数重载，能更精确地描述这种情况。

```
function format(input: string): string;
function format(input: number): string;
function format(input: string | number): string {
  return input.toString();
}
```

------

## 泛型

泛型是 TS 的高级特性，它允许我们编写可以适用于多种类型的代码，同时保留类型安全。

```
function identity<T>(arg: T): T {
  return arg;
}

// 使用
let output = identity<string>('hello');
```

Vue 3 的 `ref` 和 `reactive` 就是泛型的典型应用。比如 `ref<User>(null)` 就明确告诉 TS，这个 ref 的值的类型是 `User | null`。

泛型还可以结合约束，比如限制 `T` 必须包含某些属性：

```
function logLength<T extends { length: number }>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

------

## 枚举（Enum）

枚举用于定义一组命名的常量，在代码中非常直观。

```
enum Status {
  Pending,
  InProgress,
  Completed
}

let currentStatus: Status = Status.Pending;
```

如果只是需要一组常量，可以用**常量枚举**：

```
const enum Status {
  Pending,
  InProgress,
  Completed
}
// 编译后会被直接内联成数字
```

更常见的是用**联合类型**来替代枚举：

```
type Status = 'pending' | 'inProgress' | 'completed';
```

这样在运行时没有额外开销，而且字符串更易于调试。所以在实际项目中，可能更倾向于使用联合类型。不过枚举也有它的优势，比如可以反向映射（通过值获取键），这在某些场景下很方便。

------

## 类型推论

TS 会根据代码自动推断类型，这大大减少了我们写类型注解的工作量。

```
let x = 3;        // 推断为 number
let y = [1, 2];   // 推断为 number[]
```

类型推论是 TS 的一个“贴心”设计，但有时不太满足实际需求。比如：

```
let arr = [];   // 推断为 any[]
arr.push(1);    // 此时 arr 变为 number[]
arr.push('a');  // arr 变成了 (number|string)[]
```

显然 TS 会不断扩展数组的类型，直到无法统一为止。这会导致类型不精确。为了避免这种情况，需要在初始化时就显式声明类型。

还有一种情况是函数返回值的推断。如果不显式标注返回类型，TS 会根据 `return` 语句推断，但有时候推断的结果可能不是我们想要的，比如返回 `Promise<number>` 还是 `number`？显式标注能避免歧义。

------

## 类型兼容性

TS 的类型兼容是基于**结构子类型**的，只要结构匹配就能兼容，不需要显式继承。

```
interface Named {
  name: string;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let p: Named = new Person('小明'); // 兼容，因为 Person 有 name 属性
```

在传统的面向对象语言中，类型兼容通常要求显式继承，而 TS 只看结构是否匹配。

这种兼容方式相当灵活。比如在 Vue 中，我们传递 props 时，只要对象包含需要的属性，就可以直接传入，不需要声明实现某个接口。这大大简化了代码。

但也要注意，过于宽松的兼容可能会导致意想不到的赋值。比如：

```
interface Point {
  x: number;
  y: number;
}

function draw(point: Point) { ... }

draw({ x: 1, y: 2, z: 3 }); // 在 TS 中会报错，因为有多余属性
```

TS 在直接传入对象字面量时会检查多余属性，但如果是变量赋值，则只检查必须属性。这是为了兼顾灵活性和安全性。

------

## 高级类型

高级类型包括交叉类型、联合类型、类型别名、映射类型、条件类型等，它们是 TS 真正强大的地方。

- **联合类型**：`string | number`
- **交叉类型**：`A & B`
- **类型别名**：`type MyType = ...`

 `type` 和 `interface` 的区别：

| 特性              | interface | type |
| :---------------- | :-------- | :--- |
| 定义对象/函数     | ✅         | ✅    |
| 定义联合类型/元组 | ❌         | ✅    |
| 声明合并          | ✅         | ❌    |
| 映射类型          | ❌         | ✅    |
| 扩展方式          | extends   | &    |

用 `interface` 定义对象结构，用 `type` 定义联合类型或需要映射的场景。

------

## Symbols

Symbol 是 ES6 引入的原始类型，可以用来创建唯一的标识符。TS 对 Symbol 有良好的支持，常用于定义对象的内部属性或常量。

```
const uniqueKey = Symbol('key');
```

Symbol 的一个典型应用是在 Vue 中提供 inject/provide 的 key，确保唯一性。TS 可以让我们给 Symbol 加上类型，使得 provide/inject 的类型安全：

```
const myKey: InjectionKey<string> = Symbol('myKey');
provide(myKey, 'hello');
const value = inject(myKey); // value 的类型是 string | undefined
```

这比直接使用字符串作为 key 要安全得多，因为 TS 能保证注入的值类型匹配。

------

## 总结

TypeScript作为 JavaScript的超集，核心是为 JS 增加了**静态类型系统**。



在此列出笔者体验下来总结的一些优缺点：

##### 1. 静态类型检查：提前发现Bug

JS 是动态弱类型，只有运行时才会暴露类型错误（比如传错参数类型、访问不存在的对象属性）。TS 会在**编译阶段**就检查出类型问题，避免线上故障。

##### 2. 增强代码提示与可读性：类型即文档

TS 的类型注解起到一个 “自文档化”的作用，编辑器能基于类型提供精准的代码补全、参数提示，接手项目时，不用反复思考确认 “这个函数参数要传什么？返回值是什么？”。

##### 3.更好的工程化与团队协作

类型约束相当于 “隐形的编码规范”，能统一团队的代码风格；结合 ESLint、Prettier 等工具，能大幅降低代码评审的沟通成本。

------



##### 1. 学习成本增加

TS 新增了一套类型系统（泛型、联合类型、交叉类型、类型守卫等），对 JS 新手来说，需要额外花时间理解这些概念；即使是资深 JS 开发者，也可能在复杂类型场景下 “卡壳”。

##### 2. 开发初期成本上升

写 TS 要额外编写类型注解，简单功能会比 JS 多写几行代码（比如定义接口、标注参数类型）；小项目 / 一次性脚本（比如写个几十行的爬虫）用 TS 反而显得 “小题大做”，降低开发效率。

##### 3. 第三方库的类型兼容问题

部分老旧 / 小众的 JS 库没有提供类型声明文件（`@types/xxx`），使用时要么手动写声明，要么用 `any` 兜底（相当于放弃类型检查），会削弱 TS 的价值。

##### 总的来说

TS 的核心价值是**用静态类型解决 JS 在大型项目中的可维护性、可靠性问题**，尤其适合团队协作、长期迭代的场景；

TS 的缺点集中在**学习 / 开发初期的额外成本**，对小项目 / 快速开发场景反而不友好；

选择的核心逻辑：当 “类型带来的 bug 减少、重构效率提升” 能覆盖 “写类型的成本” 时，TS 就是更优解。