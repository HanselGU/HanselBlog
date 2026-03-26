### 1. **本质与目的**

- **接口**：
  用于**定义对象的结构类型**。它只描述对象应该有哪些属性、方法及其类型，**不包含实现**。主要用于编译时的类型检查。

  ```
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }//
  ```

  对象只要满足接口的类型要求，即使方法只是个空壳也可以。

- **类**：
  用于**创建对象**的蓝图，可以**包含数据（属性）和行为（方法）的实现**。它是面向对象编程的基础，支持封装、继承、多态。

  ```
  class Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hi, I'm ${this.name}`);
    }
  }
  ```

  

------

### 2. **实例化**

- **接口**：**不能**被实例化。

  ```
  // 错误：接口不能用作构造函数
  const p = new Person(); 
  ```

  

- **类**：**可以**实例化为对象。

  ```
  const s = new Student("Alice", 20); // 正确
  ```

  

------

### 3. **实现与扩展**

- **类可以实现接口**：使用 `implements` 关键字，类<span style='color:red'>必须</span>实现接口中声明的所有成员。

  ```
  class Employee implements Person {
    constructor(public name: string, public age: number) {}
    greet() { console.log("Hello"); }
  }
  ```

  

- **接口可以扩展接口**：使用 `extends` 合并多个接口。

  ```
  interface Animal { eat(): void; }
  interface Dog extends Animal { bark(): void; }
  ```

  

- **类可以继承类**（单继承），并**实现多个接口**：

  ```
  class A {}
  class B extends A implements Interface1, Interface2 {}
  ```

  

------

### 4. **成员实现与修饰符**

- **接口**：成员**只能声明类型**，不能有具体实现；**不支持修饰符**（如 `private`、`protected`），所有成员默认 `public`。

  ```
  interface Clock {
    private time: Date; // ❌ 错误：接口不能有私有成员
    tick(): void;       // ✅ 仅声明
  }
  ```

  

- **类**：成员可以**有实现**，并且支持 `public`、`private`、`protected`、`readonly`、`static` 等修饰符。

  ```
  class DigitalClock {
    private time: Date;
    public tick() { this.time = new Date(); }
  }
  ```

  

------

### 5. **编译时与运行时**

- **接口**：只在**编译时**存在，用于类型检查，编译为 JavaScript 后会被**完全移除**，不占用运行时代码。
- **类**：既是 TypeScript 类型，也是 ES6 特性，编译后会**保留为 JavaScript 类**（或函数），在运行时真实存在。

------

### 6. **其他特性**

- **可选属性与只读属性**：接口和类都支持，但语法略有不同。

  ```
  interface Config {
    readonly id: string;
    color?: string;
  }
  
  class ConfigClass {
    readonly id: string;
    color?: string;
  }
  ```

  

- **静态成员**：类可以有 `static` 成员，接口不能定义静态成员。

- **构造函数签名**：接口可以描述构造函数类型，但类本身通过 `new` 调用。

------

### 7. **抽象类**

- **抽象类**：介于接口和普通类之间，可以包含实现，也可以只声明抽象方法（类似接口）。但抽象类不能被实例化，只能被继承。
- **接口**：完全抽象，不能有任何实现。

------

### 总结对比表

| 特性             | 接口 (Interface)           | 类 (Class)                     |
| :--------------- | :------------------------- | :----------------------------- |
| **目的**         | 定义类型结构               | 创建对象蓝图，包含实现         |
| **实例化**       | 不能                       | 能                             |
| **实现**         | 只能声明成员类型           | 可以包含具体代码               |
| **访问修饰符**   | 不支持                     | 支持 `private`、`protected` 等 |
| **继承**         | 多继承（extends 多个接口） | 单继承（extends 一个父类）     |
| **实现多个契约** | 不适用                     | 可以实现多个接口               |
| **编译结果**     | 编译后完全删除             | 编译后保留为 JavaScript 类     |
| **静态成员**     | 不能                       | 支持                           |

------

### 使用建议

- **需要定义数据形状、规范契约时** → 使用**接口**。
- **需要创建对象、封装逻辑、复用代码时** → 使用**类**。

两者常结合使用：类实现接口，既保证了结构一致性，又能提供具体实现。