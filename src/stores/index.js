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
