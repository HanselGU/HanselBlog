import {defineStore} from 'pinia'
import {ref} from 'vue';

export const LoadingSign=defineStore('LoadingSign', () => {
    const loading=ref(true)
    const setLoading=(sign) => {
        loading.value=sign
    }
    return {
        loading,
        setLoading
    }
})
export const toolSign=defineStore('toolSign', () => {
    const sign=ref(false)
    const setSign=(value) => {
        sign.value=value
    }
    return {
        sign,
        setSign
    }
})
export const mdData=defineStore('mdData', () => {
    const mdArray=ref([
        {
            inner: '# 成都游玩体验\n'+'\n'+'------\n'+'\n'+'#### 第一站 到达\n'+'\n'+'飞机上很无聊。\n'+'\n'+'下降的时候，天府机场的天气条件不行，飞机盘旋了很久，最终转去了双流。好消息，双流离市区近一些。\n'+'\n'+'酒店订在春熙路，四人电竞房，相当舒服了。\n'+'\n'+'\n'+'\n'+'#### 第二站 三星堆\n'+'\n'+'三星堆挺震撼的，但是人超级多。\n'+'\n'+'<img src="/static/IMG_8508.JPG" alt="IMG_8508" style="width:500px" />\n'+'\n'+'人面像\n'+'\n'+'<img src="/static/IMG_8519.JPG" alt="IMG_8519" style="width:500px" />\n'+'\n'+'陶猪。十分有名，跟游戏愤怒的小鸟里面很接近，有趣。\n'+'\n'+'<img src="/static/IMG_8536.JPG" alt="IMG_8536" style="width:500px" />\n'+'\n'+'器皿\n'+'\n'+'<img src="/static/IMG_8653.JPG" alt="IMG_8653" style="width:500px" />\n'+'\n'+'青铜神树。算是标志性的展品了。给人的感觉很棒。\n'+'\n'+'一号厅分三个区展示不同的展品，顺便买了一些纪念品。\n'+'\n'+'二号厅是展示修复的展厅我记得，不明觉厉。\n'+'\n'+'\n'+'\n'+'#### 第三站 武侯祠\n'+'\n'+'武侯祠，说实话不好看，感觉纯是为了情怀来看丞相的。唯一有段路叫做‘红墙’的，有点子感觉，但是很多人选择在这里驻足拍照，所以也没有什么好看。\n'+'\n'+'<img src="/static/IMG_8661.JPG" alt="IMG_8661" style="width:500px" />\n'+'\n'+'武侯祠后面是刘湘的墓，还挺大的，就是冷清。刘湘干了一辈子破事，最后能躺在这里，也算是不错了。\n'+'\n'+'出来就是锦里，一堆店面，有一个树下是一个挂许愿签的地方，有新的，也有已经发霉的。给我的印象挺深刻。\n'+'\n'+'最后买了两个纪念章送给表弟妹。\n'+'\n'+'\n'+'\n'+'#### 总结\n'+'\n'+'成都美食是真不错。唯一的就是老妈蹄花这个店到处都是，隔两百米就有一家，无敌了我只能说。\n'+'\n'+'最后我们几个人总结了一下，开个玩笑说不如待在酒店里开黑。其实是很久没有几个人一起出去待着，怀念这种感觉罢了。',
            name: '成都游玩体验',
            id: 1,
            type: 'life'
        }, {
            inner: '# 个人电脑组建记录\n'+'\n'+'#### 1.配置选择\n'+'\n'+'<img src="/static/IMG_20230307_185352.jpg" alt="IMG_20230307_185352" style="width:500px" />\n'+'\n'+'2023年自己攒的。\n'+'\n'+'CPU选择13600K。应该选KF会省点，但是第一次装机，防止点不亮所以选择带核显的版本。\n'+'\n'+'主板选择华硕吹雪B760。性价比低了，只能说未来升级配置还可以继续使用。\n'+'\n'+'显卡选择七彩虹3060ti火神。亏了，不久40系列就出了，不过还好，等不及了，也算是早买早享受了。\n'+'\n'+'内存选了两根DDR4 4000HZ的金百达的海力士条，性价比还是可以的。\n'+'\n'+'硬盘选了三个。一个三星的980做系统盘，当时990掉盘问题比较严重，退而求其次选择980.西数的SN770做日常使用，各类软件、游戏、文件都放在这里。留一个4T的机械盘做存储。\n'+'\n'+'\n'+'\n'+'------\n'+'\n'+'\n'+'\n'+'#### 2.装机过程\n'+'\n'+'没有经验，全程根据BILIBILI硬件茶谈的视频指导装机。\n'+'\n'+'<img src="/static/IMG_20230307_073440.jpg" alt="IMG_20230307_073440" style="width:500px" />\n'+'\n'+'先在主板上安装cpu、内存和硬盘。这里犯了个错误，先把风扇装上去了，风冷的体积还是相当大的，直接导致后续安装在机箱里，走线的难度飙升。\n'+'\n'+'<img src="/static/IMG_20230307_211916.jpg" alt="IMG_20230307_211916" style="width:500px" />\n'+'\n'+'<img src="/static/IMG_20230308_200916.jpg" alt="IMG_20230308_200916" style="width:500px" />\n'+'\n'+'简单走了一下线，扎带不够不是很直，一些难搞的线塞到背面去了，无伤大雅，一切就绪准备开机成功点亮。',
            name: '个人工作站搭建',
            id: 2,
            type: 'device'
        }, {
            inner: "# 使用vitepress和markdownIT的体验\n"+"\n"+"\n"+"\n"+"搭建类似blog的网页，使用平时写的MD文档去做填充，相当方便。\n"+"\n"+"------\n"+"\n"+"#### markdown-it使用体验\n"+"\n"+"markdown-it是一个插件，用来将MD语句解释为HTML代码，使用V-HTML等指令可以简单快捷的呈现内容。\n"+"\n"+"```bash\n"+"安装 npm install markdown-it --save\n"+"```\n"+"\n"+"官方文档给的用法\n"+"\n"+"```js\n"+"// node.js, 用“类”的方式：\n"+"var MarkdownIt = require('markdown-it'),\n"+"    md = new MarkdownIt();\n"+"var result = md.render('# markdown-it rulezz!');\n"+"\n"+"// 还是 node.js, 但使用更爽的方式：\n"+"var md = require('markdown-it')();\n"+"var result = md.render('# markdown-it rulezz!');\n"+"\n"+"// 没有 AMD 的浏览器环境，在 js 脚本加载时才添加到“window”\n"+"// 注意，“markdownit” 中没有破折号。\n"+"var md = window.markdownit();\n"+"var result = md.render('# markdown-it rulezz!');\n"+"```\n"+"\n"+"因为个人使用的vite搭建VUE项目，vite使用的ESM（ECMAScript模块）方式加载模块。\n"+"\n"+" *require* 是Node.js的原生方法，它以CommonJS方式加载模块\n"+"\n"+"所以实际上\n"+"\n"+"```\n"+"import MarkdownIt from 'markdown-it'\n"+"\n"+"const md=new MarkdownIt({\n"+"    html: true, // 启用HTML标签\n"+"    breaks: true, // 转换换行符为<br>\n"+"    linkify: true, // 自动转换URL为链接\n"+"    typographer: true, // 启用语言中性的替换\n"+"});\n"+"\n"+"let result=md.render(MD1)//MD1就是MD语句\n"+"```\n"+"\n"+"使用语句成功了，但是实际应用中，我用MD文件直接转HTML代码失败了。首先尝试使用内置的fs，使用readFileSync失败，搜索得知会和浏览器冲突。然后使用fs-extra插件，来获取文件，但是node的版本问题，导致出现插件中部分js文件中的代码出错。失败。\n"+"\n"+"#### 思考使用vitepress\n"+"\n"+"```\n"+"安装 npm add -D vitepress@next\n"+"```\n"+"\n"+"vitepress的作用，是对一个MD文件产出对应的HTML文件，十分方便。\n"+"\n"+"但是显然集成在我的BLOG里不理想，一来会使项目臃肿，二来我的MD文件不会经常更改，没有多次使用的需求。\n"+"\n"+"最终使用vitepres产出HTML文件，对HTML文件处理后，在BLOG中使用，稍微麻烦一点。",
            name: '使用vitepress和markdownIT的体验',
            id: 3,
            type: 'code'
        }, {
            inner: '#### 一。异步操作基础\n'+'\n'+'在实际开发中，异步操作随处可见，例如发起 HTTP 请求、操作本地文件、加载图片、定时动画等。\n'+'\n'+'JS 是单线程非阻塞的，通过事件循环机制处理异步任务。执行栈为空时，会从任务队列中取出任务执行。任务分为宏任务和微任务。\n'+'\n'+'- **宏任务**：整体 script、setTimeout、setInterval、I/O、UI 渲染等。每次事件循环会执行一个宏任务。\n'+'- **微任务**：Promise.then、MutationObserver、queueMicrotask 等。微任务会在当前宏任务执行完毕后、下一个宏任务开始前清空所有微任务。\n'+'- **执行顺序**：执行一个宏任务 → 执行所有微任务 → 渲染（如果有必要）→ 取下一个宏任务。\n'+'\n'+'**事件循环机制**：同步任务放在主线程上执行，异步任务（如定时器、网络请求）被注册后挂到任务队列中，等主线程空闲时再执行。\n'+'\n'+'\n'+'\n'+'为了保证部分代码语句按我们需要的顺序执行（例如使用请求A中返回的数据去操作请求B），需要对异步依赖逻辑进行处理。\n'+'\n'+'最早处理逻辑是类似这样的：\n'+'\n'+'```\n'+'setTimeout(() => {  \n'+'console.log(\'第一个异步\');  \n'+'setTimeout(() => {    \n'+'console.log(\'第二个异步\');  \n'+'}, 1000); \n'+'}, 1000);\n'+'```\n'+'\n'+'一旦逻辑继续叠加，层层叠加，就是<span style=\'color:red\'>回调地狱</span>,看着就很头痛。\n'+'\n'+'为了解决这个问题，在ES6中引入了Promise。\n'+'\n'+'\n'+'\n'+'#### 二。Promise\n'+'\n'+'Promise的基本结构：\n'+'\n'+'```\n'+'const promise = new Promise((resolve, reject) => {  \n'+'// 异步任务逻辑，会和外部代码同步调用 \n'+'resolve(结果);  // 或 reject(错误)\n'+'}); \n'+'promise.then(res => { \n'+'// 处理结果\n'+'}).catch(err => { \n'+'// 处理异常 \n'+'});\n'+'```\n'+'\n'+'一个Promise有三种状态：pendding进行中，resolved/fulfilled成功和rejected失败。\n'+'\n'+'状态只能从pending变为resolved或者rejected，并且变化之后不会再次改变。\n'+'\n'+'Promise实例对象中的一个属性【PromiseState】保存着状态值。另一个属性【PromiseResult】保存异步任务的结果。\n'+'\n'+'Promised的基本流程：\n'+'\n'+'<img src="/static/P1.png" style="width:800px" />\n'+'\n'+'两个特殊方法：\n'+'\n'+'1.Promise.all方法：（promises）=>{}接收一个promise数组，只有所有的任务都成功才返回成功。\n'+'\n'+'2.Promise.race方法：(promiss)=>{}接收一个promise数组，第一个完成的任务返回的结果就是最终结果。\n'+'\n'+'Promise执行器内部是异步操作，一般是先指定回调，在改变状态。\n'+'\n'+'如果需要先改状态在执行回调，可以通过两种方式：1.在执行器中直接调用resolve()或者reject().2.手动延迟then()的调用时间。\n'+'\n'+'Promise是可以链式调用的，then()内部返回一个新的Promise对象，例如：\n'+'\n'+'```\n'+'const promise = new Promise((resolve, reject) => {}); \n'+'promise.then(res => { \n'+'// 处理结果1\n'+'}).then(res => { \n'+'// 处理结果2\n'+'return new Promise.then(()=>{})\n'+'}).then(res => { \n'+'// 处理结果3\n'+'}).catch(err => { \n'+'// 处理异常 \n'+'});\n'+'```\n'+'\n'+'只要其中一个promise出现err，都会到最后的catch中处理。\n'+'\n'+'需要在链式调用的中间停止，可以在回调函数中返回一个pendding状态的promise对象。\n'+'\n'+'\n'+'\n'+'#### 三。async/await\n'+'\n'+'async/await是ES8提出的机遇Promise的，实际上是Promise的语法糖。\n'+'\n'+'```\n'+'//定义一个函数模拟请求\n'+'function getA=()=>{\n'+'\treturn new Promise((resolve,reject)=>{\n'+'\t\tsetTimeout(()=>{resolve(\'success\')},1000)\n'+'\t})\n'+'}\n'+'async function test=()=>{\n'+'\tconst res=await getA()\n'+'\tlog(res)\n'+'}\n'+'```\n'+'\n'+'async加在函数前，这样的函数会默认返回一个Promise对象resolve的值，可以使用then（）回调。\n'+'\n'+'await只能在async修饰的函数内部使用。当修饰Promise对象时，可以获取返回的内容，取到后语句才会继续往下执行。\n'+'\n'+'TIPS：\n'+'\n'+'<div style=\'color:red\'>1.await 只能在 async 函数中使用<br/>\n'+'    2.await 会阻塞当前 async 函数，但不会阻塞主线程\n'+'</div>\n'+'\n'+'\n'+'\n'+'#### 四。使用场景的区别\n'+'\n'+'|           场景           |    建议用法    |\n'+'| :----------------------: | :------------: |\n'+'|       简单异步任务       | Promise.then() |\n'+'| 串联同步任务依赖异步任务 |  async/await   |\n'+'|  有多个异步任务并发执行  | Promise.all()  |\n'+'\n'+'\n'+'\n'+'\n'+'\n'+'\n'+'\n',
            name: 'Promise和asyncawait的实践区别',
            id: 4,
            type: 'code'
        }, {
            inner: '### 1. **本质与目的**\n'+'\n'+'- **接口**：\n'+'  用于**定义对象的结构类型**。它只描述对象应该有哪些属性、方法及其类型，**不包含实现**。主要用于编译时的类型检查。\n'+'\n'+'  ```\n'+'  interface Person {\n'+'    name: string;\n'+'    age: number;\n'+'    greet(): void;\n'+'  }//\n'+'  ```\n'+'\n'+'  对象只要满足接口的类型要求，即使方法只是个空壳也可以。\n'+'\n'+'- **类**：\n'+'  用于**创建对象**的蓝图，可以**包含数据（属性）和行为（方法）的实现**。它是面向对象编程的基础，支持封装、继承、多态。\n'+'\n'+'  ```\n'+'  class Student {\n'+'    name: string;\n'+'    age: number;\n'+'    constructor(name: string, age: number) {\n'+'      this.name = name;\n'+'      this.age = age;\n'+'    }\n'+'    greet() {\n'+'      console.log(`Hi, I\'m ${this.name}`);\n'+'    }\n'+'  }\n'+'  ```\n'+'\n'+'  \n'+'\n'+'------\n'+'\n'+'### 2. **实例化**\n'+'\n'+'- **接口**：**不能**被实例化。\n'+'\n'+'  ```\n'+'  // 错误：接口不能用作构造函数\n'+'  const p = new Person(); \n'+'  ```\n'+'\n'+'  \n'+'\n'+'- **类**：**可以**实例化为对象。\n'+'\n'+'  ```\n'+'  const s = new Student("Alice", 20); // 正确\n'+'  ```\n'+'\n'+'  \n'+'\n'+'------\n'+'\n'+'### 3. **实现与扩展**\n'+'\n'+'- **类可以实现接口**：使用 `implements` 关键字，类<span style=\'color:red\'>必须</span>实现接口中声明的所有成员。\n'+'\n'+'  ```\n'+'  class Employee implements Person {\n'+'    constructor(public name: string, public age: number) {}\n'+'    greet() { console.log("Hello"); }\n'+'  }\n'+'  ```\n'+'\n'+'  \n'+'\n'+'- **接口可以扩展接口**：使用 `extends` 合并多个接口。\n'+'\n'+'  ```\n'+'  interface Animal { eat(): void; }\n'+'  interface Dog extends Animal { bark(): void; }\n'+'  ```\n'+'\n'+'  \n'+'\n'+'- **类可以继承类**（单继承），并**实现多个接口**：\n'+'\n'+'  ```\n'+'  class A {}\n'+'  class B extends A implements Interface1, Interface2 {}\n'+'  ```\n'+'\n'+'  \n'+'\n'+'------\n'+'\n'+'### 4. **成员实现与修饰符**\n'+'\n'+'- **接口**：成员**只能声明类型**，不能有具体实现；**不支持修饰符**（如 `private`、`protected`），所有成员默认 `public`。\n'+'\n'+'  ```\n'+'  interface Clock {\n'+'    private time: Date; // ❌ 错误：接口不能有私有成员\n'+'    tick(): void;       // ✅ 仅声明\n'+'  }\n'+'  ```\n'+'\n'+'  \n'+'\n'+'- **类**：成员可以**有实现**，并且支持 `public`、`private`、`protected`、`readonly`、`static` 等修饰符。\n'+'\n'+'  ```\n'+'  class DigitalClock {\n'+'    private time: Date;\n'+'    public tick() { this.time = new Date(); }\n'+'  }\n'+'  ```\n'+'\n'+'  \n'+'\n'+'------\n'+'\n'+'### 5. **编译时与运行时**\n'+'\n'+'- **接口**：只在**编译时**存在，用于类型检查，编译为 JavaScript 后会被**完全移除**，不占用运行时代码。\n'+'- **类**：既是 TypeScript 类型，也是 ES6 特性，编译后会**保留为 JavaScript 类**（或函数），在运行时真实存在。\n'+'\n'+'------\n'+'\n'+'### 6. **其他特性**\n'+'\n'+'- **可选属性与只读属性**：接口和类都支持，但语法略有不同。\n'+'\n'+'  ```\n'+'  interface Config {\n'+'    readonly id: string;\n'+'    color?: string;\n'+'  }\n'+'  \n'+'  class ConfigClass {\n'+'    readonly id: string;\n'+'    color?: string;\n'+'  }\n'+'  ```\n'+'\n'+'  \n'+'\n'+'- **静态成员**：类可以有 `static` 成员，接口不能定义静态成员。\n'+'\n'+'- **构造函数签名**：接口可以描述构造函数类型，但类本身通过 `new` 调用。\n'+'\n'+'------\n'+'\n'+'### 7. **抽象类**\n'+'\n'+'- **抽象类**：介于接口和普通类之间，可以包含实现，也可以只声明抽象方法（类似接口）。但抽象类不能被实例化，只能被继承。\n'+'- **接口**：完全抽象，不能有任何实现。\n'+'\n'+'------\n'+'\n'+'### 总结对比表\n'+'\n'+'| 特性             | 接口 (Interface)           | 类 (Class)                     |\n'+'| :--------------- | :------------------------- | :----------------------------- |\n'+'| **目的**         | 定义类型结构               | 创建对象蓝图，包含实现         |\n'+'| **实例化**       | 不能                       | 能                             |\n'+'| **实现**         | 只能声明成员类型           | 可以包含具体代码               |\n'+'| **访问修饰符**   | 不支持                     | 支持 `private`、`protected` 等 |\n'+'| **继承**         | 多继承（extends 多个接口） | 单继承（extends 一个父类）     |\n'+'| **实现多个契约** | 不适用                     | 可以实现多个接口               |\n'+'| **编译结果**     | 编译后完全删除             | 编译后保留为 JavaScript 类     |\n'+'| **静态成员**     | 不能                       | 支持                           |\n'+'\n'+'------\n'+'\n'+'### 使用建议\n'+'\n'+'- **需要定义数据形状、规范契约时** → 使用**接口**。\n'+'- **需要创建对象、封装逻辑、复用代码时** → 使用**类**。\n'+'\n'+'两者常结合使用：类实现接口，既保证了结构一致性，又能提供具体实现。',
            name: 'TypeScript学习：接口和类的区别',
            id: 5,
            type: 'code'
        }, {
            inner: "#### 一。搭建部署的两种方式\n"+"\n"+"1.github部署\n"+"\n"+"项目推送到github上，在vercleWEB页面关联github仓库(import Git Repository)。对项目进行配置，并手动调整构建语句配置，对于常用的vite等构建工具有对应支持。配置完成即可开始部署\n"+"\n"+"2.本地部署\n"+"\n"+"```text\n"+"npm install -g vercel\n"+"```\n"+"\n"+"之后执行如下命令保证你本地登录了 vercel 账号：\n"+"\n"+"```text\n"+"vercel login\n"+"```\n"+"\n"+"之后进入你的项目根路径，执行 vercel 即可：\n"+"\n"+"```text\n"+"vercel\n"+"```\n"+"\n"+"之后你需要进行一些基础配置，比如你需要选择要部署的项目目录、构建命令和输出目录，如果直接回车就是执行默认配置，这些配置走完后项目就会进行部署，你可以直接等待终端部署完成后的预览地址，你可以回到 vercel 后台找到你刚才关联部署的项目，一样可以找到预览地址。\n"+"\n"+"笔者采用了github部署的方式。以下经验都基于此。\n"+"\n"+"#### 二。域名自定义\n"+"\n"+" vercel 在项目部署后会分配一个地址，但都带有 vercel.app 后缀，因一些原因，对于该后缀的访问会受限。所以我们需要自定义域名。\n"+"\n"+"##### 购买域名\n"+"\n"+"笔者通过阿里云购买了一个域名，即\n"+"\n"+"```\n"+"hanselroot.xyz\n"+"```\n"+"\n"+"域名购买完成后并不能直接使用。在阿里云上，首先你要新建一个域名信息模版，填写相关信息后，等待相关方面的审核。笔者等待了一个小时左右。\n"+"\n"+"##### 域名解析\n"+"\n"+"实名后，就可以在阿里云域名控制台中进行域名解析。直接点击‘添加记录’按钮右边的‘快速添加网站解析’，填写相关信息。\n"+"\n"+"笔者选择的是\n"+"\n"+"1.解析到IPv4.\n"+"\n"+"2.勾选'@'主机记录和'www'主机记录。\n"+"\n"+"3.IP记录值。vercel提供了相关的配置\n"+"\n"+"```\n"+"76.223.126.88 或 76.76.21.98\n"+"```\n"+"\n"+"#### 三。CNAME优化\n"+"\n"+"**CNAME（Canonical Name）** 是 DNS 记录的一种类型，作用是将一个域名指向另一个域名（而不是 IP 地址）。通俗来说，它相当于给你的网站地址设置一个“别名”。\n"+"\n"+"##### **典型场景：**\n"+"\n"+"- 你的网站托管在 Vercel，官方提供的域名是 `xxx.vercel.app`\n"+"- 你购买了自己的域名 `yourdomain.com`\n"+"- 通过 CNAME 记录将 `www.yourdomain.com` 指向 `xxx.vercel.app`\n"+"- 用户访问 `www.yourdomain.com` 时，实际访问的是 Vercel 的服务器。\n"+"\n"+"##### **在 Vercel 绑定域名**\n"+"\n"+"- 登录 Vercel 控制台 → 进入项目 → Settings → Domains\n"+"- 输入你的域名（如 `blog.yourdomain.com`）→ 点击 Add\n"+"- Vercel 会自动生成官方 CNAME 记录（如 `cname.vercel-dns.com`）\n"+"\n"+"<span style='color:red'>TIPS</span>\n"+"\n"+"- 若使用国内 CDN 节点，必须完成 ICP 备案。\n"+"\n"+"#### 四。可能的一些问题\n"+"\n"+"1.vercel 部署对于文件大小写引用更为严格，比如个人项目一些文件引用文件是小写，但引用某个字母大写。vercel 会认为这是错误，并直接报错。\n"+"\n"+"2.vercel部署的node版本问题。服务器和本地的node版本可能不一致。需要在项目设置中进行设置。\n"+"\n"+"3.vercel 会根据你的项目自动识别框架并初始化默认配置，比如：默认输出目录是 `dist`，但事实上项目的输出目录并不是这个名字，这时需要在Build&Development Settings这个配置去手动修改。\n"+"\n"+"4.网页在子路由中刷新可能会产生<span style='color:red'>404NOTFOUND</span>错误。需要在项目根目录新建一个vercel.json配置文件,指定一个重写规则。\n"+"\n"+"```\n"+"{\n"+"  \"rewrites\" : [ { \"source\" : \"/:path*\", \"destination\" : \"/index.html\" } ]\n"+"}\n"+"```\n"+"\n"+"- `\":path*\"` 是一个通配符，表示匹配所有路径\n"+"- `\"destination\": \"/index.html\"` 则指定了将所有请求重定向到 `index.html` 文件。\n"+"\n"+"原理：前端路由的更改本质上是前端把**路由重定向后再渲染相应的页面**\n"+"\n"+"**其实服务器上根本没有相应的前端资源，所以刷新后才会说出现404这个结果**\n"+"\n"+"我们在打包后一般只有`index.html`这一个`html`文件，其他的`css`和`js`文件则是单独存放\n"+"\n"+"其他资源都是通过引入到`index.html`使用\n"+"\n"+"当路由改变时，前端路由库会解析URL从而让SPA单页面框架生成不同虚拟DOM，最后渲染生成不同的页面，从而达到了跳转路由的目的\n"+"\n"+"**所以其实前端根本没有向后端发起请求！**\n"+"\n"+"但是你刷新页面，浏览器会以当前URL进行请求，而服务器只有`index.html`这一请求资源，其他都是通过link和script标签加载，自然找不到对应资源，**所以才会404**\n"+"\n"+"这个配置文件的效果就是:**直接把所有的请求都指向`index.html`，返回`index.html`后，路径则就会被js解析从而渲染相应页面**\n"+"\n",
            name: '使用vercel搭建个人网站的经验',
            id: 6,
            type: 'code'
        } ])
    return { mdArray }
})

// export const useScale=defineStore('scaleCal', () => {
//     const scale=ref(0)
//     const setScale=(n) => {
//         scale.value=ref(n)
//     }
//     return {
//         scale,
//         setScale
//     }
// })
// export const useTemp=defineStore('temp', () => {
//     const scale=ref(0)
//     const scaleAdj=() => {
//
//     }
//     return {
//         scale,
//         scaleAdj
//     }
// })
