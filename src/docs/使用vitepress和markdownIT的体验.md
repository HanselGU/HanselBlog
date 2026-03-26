# 使用vitepress和markdownIT的体验



搭建类似blog的网页，使用平时写的MD文档去做填充，相当方便。

------

#### markdown-it使用体验

markdown-it是一个插件，用来将MD语句解释为HTML代码，使用V-HTML等指令可以简单快捷的呈现内容。

```bash
安装 npm install markdown-it --save
```

官方文档给的用法

```js
// node.js, 用“类”的方式：
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');

// 还是 node.js, 但使用更爽的方式：
var md = require('markdown-it')();
var result = md.render('# markdown-it rulezz!');

// 没有 AMD 的浏览器环境，在 js 脚本加载时才添加到“window”
// 注意，“markdownit” 中没有破折号。
var md = window.markdownit();
var result = md.render('# markdown-it rulezz!');
```

因为个人使用的vite搭建VUE项目，vite使用的ESM（ECMAScript模块）方式加载模块。

 *require* 是Node.js的原生方法，它以CommonJS方式加载模块

所以实际上

```
import MarkdownIt from 'markdown-it'

const md=new MarkdownIt({
    html: true, // 启用HTML标签
    breaks: true, // 转换换行符为<br>
    linkify: true, // 自动转换URL为链接
    typographer: true, // 启用语言中性的替换
});

let result=md.render(MD1)//MD1就是MD语句
```

使用语句成功了，但是实际应用中，我用MD文件直接转HTML代码失败了。首先尝试使用内置的fs，使用readFileSync失败，搜索得知会和浏览器冲突。然后使用fs-extra插件，来获取文件，但是node的版本问题，导致出现插件中部分js文件中的代码出错。失败。

#### 思考使用vitepress

```
安装 npm add -D vitepress@next
```

vitepress的作用，是对一个MD文件产出对应的HTML文件，十分方便。

但是显然集成在我的BLOG里不理想，一来会使项目臃肿，二来我的MD文件不会经常更改，没有多次使用的需求。

最终使用vitepres产出HTML文件，对HTML文件处理后，在BLOG中使用，稍微麻烦一点。