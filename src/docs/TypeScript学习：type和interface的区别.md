### 1. 声明合并

- **interface**：支持**声明合并**。如果多次定义同名的 `interface`，TypeScript 会自动将它们合并。

  ```
  interface User {
      name: string;
  }
  interface User {
      age: number;
  }
  //等价于 
  interface User {
  	name: string;
  	age: number;
  }
  ```

- **type**：不支持声明合并。创建同名 `type` 会导致错误。



### 2. 扩展方式

- **interface**：使用 `extends` 关键字扩展。

  ```
  interface Animal { name: string; }
  interface Bear extends Animal { honey: boolean; }
  ```

- **type**：使用交叉类型 `&` 扩展。

  ```
  type Animal = { name: string; };
  type Bear = Animal & { honey: boolean; };
  ```



### 3. 适用类型

- **interface**：只能描述**对象**、**函数**或**类**的结构。无法定义原始类型（如 `string`）、联合类型、元组等。

- **type**：可以定义**任何类型**。包括原始类型、联合类型、元组、映射类型、条件类型等。

  ```
  // 联合类型
  type ID = string | number;
  // 元组
  type Point = [x: number, y: number];
  // 原始类型别名
  type Name = string;
  ```

  

### 4. 类实现

两者都支持 `implements`，但有一些细微差别：

- `interface` 没有联合类型的概念，实现起来更直观。
- 如果 `type` 包含联合类型，类无法直接 `implements` 它（因为类只能实现单一的对象结构）。

------

### 总结：

社区中，包括在TypeScript文档中，推荐尽量优先使用 `interface`，在需要组合、映射或定义非对象类型时，用 `type`。