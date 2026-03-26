#### 一。异步操作基础

在实际开发中，异步操作随处可见，例如发起 HTTP 请求、操作本地文件、加载图片、定时动画等。

JS 是单线程非阻塞的，通过事件循环机制处理异步任务。执行栈为空时，会从任务队列中取出任务执行。任务分为宏任务和微任务。

- **宏任务**：整体 script、setTimeout、setInterval、I/O、UI 渲染等。每次事件循环会执行一个宏任务。
- **微任务**：Promise.then、MutationObserver、queueMicrotask 等。微任务会在当前宏任务执行完毕后、下一个宏任务开始前清空所有微任务。
- **执行顺序**：执行一个宏任务 → 执行所有微任务 → 渲染（如果有必要）→ 取下一个宏任务。

**事件循环机制**：同步任务放在主线程上执行，异步任务（如定时器、网络请求）被注册后挂到任务队列中，等主线程空闲时再执行。



为了保证部分代码语句按我们需要的顺序执行（例如使用请求A中返回的数据去操作请求B），需要对异步依赖逻辑进行处理。

最早处理逻辑是类似这样的：

```
setTimeout(() => {  
console.log('第一个异步');  
setTimeout(() => {    
console.log('第二个异步');  
}, 1000); 
}, 1000);
```

一旦逻辑继续叠加，层层叠加，就是<span style='color:red'>回调地狱</span>,看着就很头痛。

为了解决这个问题，在ES6中引入了Promise。



#### 二。Promise

Promise的基本结构：

```
const promise = new Promise((resolve, reject) => {  
// 异步任务逻辑，会和外部代码同步调用 
resolve(结果);  // 或 reject(错误)
}); 
promise.then(res => { 
// 处理结果
}).catch(err => { 
// 处理异常 
});
```

一个Promise有三种状态：pendding进行中，resolved/fulfilled成功和rejected失败。

状态只能从pending变为resolved或者rejected，并且变化之后不会再次改变。

Promise实例对象中的一个属性【PromiseState】保存着状态值。另一个属性【PromiseResult】保存异步任务的结果。

Promised的基本流程：

<img src="/static/P1.png" style="width:800px" />

两个特殊方法：

1.Promise.all方法：（promises）=>{}接收一个promise数组，只有所有的任务都成功才返回成功。

2.Promise.race方法：(promiss)=>{}接收一个promise数组，第一个完成的任务返回的结果就是最终结果。

Promise执行器内部是异步操作，一般是先指定回调，在改变状态。

如果需要先改状态在执行回调，可以通过两种方式：1.在执行器中直接调用resolve()或者reject().2.手动延迟then()的调用时间。

Promise是可以链式调用的，then()内部返回一个新的Promise对象，例如：

```
const promise = new Promise((resolve, reject) => {}); 
promise.then(res => { 
// 处理结果1
}).then(res => { 
// 处理结果2
return new Promise.then(()=>{})
}).then(res => { 
// 处理结果3
}).catch(err => { 
// 处理异常 
});
```

只要其中一个promise出现err，都会到最后的catch中处理。

需要在链式调用的中间停止，可以在回调函数中返回一个pendding状态的promise对象。



#### 三。async/await

async/await是ES8提出的机遇Promise的，实际上是Promise的语法糖。

```
//定义一个函数模拟请求
function getA=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{resolve('success')},1000)
	})
}
async function test=()=>{
	const res=await getA()
	log(res)
}
```

async加在函数前，这样的函数会默认返回一个Promise对象resolve的值，可以使用then（）回调。

await只能在async修饰的函数内部使用。当修饰Promise对象时，可以获取返回的内容，取到后语句才会继续往下执行。

TIPS：

<div style='color:red'>1.await 只能在 async 函数中使用<br/>
    2.await 会阻塞当前 async 函数，但不会阻塞主线程
</div>



#### 四。使用场景的区别

|           场景           |    建议用法    |
| :----------------------: | :------------: |
|       简单异步任务       | Promise.then() |
| 串联同步任务依赖异步任务 |  async/await   |
|  有多个异步任务并发执行  | Promise.all()  |







