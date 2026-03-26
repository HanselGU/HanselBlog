#### 一。搭建部署的两种方式

1.github部署

项目推送到github上，在vercleWEB页面关联github仓库(import Git Repository)。对项目进行配置，并手动调整构建语句配置，对于常用的vite等构建工具有对应支持。配置完成即可开始部署

2.本地部署

```text
npm install -g vercel
```

之后执行如下命令保证你本地登录了 vercel 账号：

```text
vercel login
```

之后进入你的项目根路径，执行 vercel 即可：

```text
vercel
```

之后你需要进行一些基础配置，比如你需要选择要部署的项目目录、构建命令和输出目录，如果直接回车就是执行默认配置，这些配置走完后项目就会进行部署，你可以直接等待终端部署完成后的预览地址，你可以回到 vercel 后台找到你刚才关联部署的项目，一样可以找到预览地址。

笔者采用了github部署的方式。以下经验都基于此。

#### 二。域名自定义

 vercel 在项目部署后会分配一个地址，但都带有 vercel.app 后缀，因一些原因，对于该后缀的访问会受限。所以我们需要自定义域名。

##### 购买域名

笔者通过阿里云购买了一个域名，即

```
hanselroot.xyz
```

域名购买完成后并不能直接使用。在阿里云上，首先你要新建一个域名信息模版，填写相关信息后，等待相关方面的审核。笔者等待了一个小时左右。

##### 域名解析

实名后，就可以在阿里云域名控制台中进行域名解析。直接点击‘添加记录’按钮右边的‘快速添加网站解析’，填写相关信息。

笔者选择的是

1.解析到IPv4.

2.勾选'@'主机记录和'www'主机记录。

3.IP记录值。vercel提供了相关的配置

```
76.223.126.88 或 76.76.21.98
```

#### 三。CNAME优化

**CNAME（Canonical Name）** 是 DNS 记录的一种类型，作用是将一个域名指向另一个域名（而不是 IP 地址）。通俗来说，它相当于给你的网站地址设置一个“别名”。

##### **典型场景：**

- 你的网站托管在 Vercel，官方提供的域名是 `xxx.vercel.app`
- 你购买了自己的域名 `yourdomain.com`
- 通过 CNAME 记录将 `www.yourdomain.com` 指向 `xxx.vercel.app`
- 用户访问 `www.yourdomain.com` 时，实际访问的是 Vercel 的服务器。

##### **在 Vercel 绑定域名**

- 登录 Vercel 控制台 → 进入项目 → Settings → Domains
- 输入你的域名（如 `blog.yourdomain.com`）→ 点击 Add
- Vercel 会自动生成官方 CNAME 记录（如 `cname.vercel-dns.com`）

<span style='color:red'>TIPS</span>

- 若使用国内 CDN 节点，必须完成 ICP 备案。

#### 四。可能的一些问题

1.vercel 部署对于文件大小写引用更为严格，比如个人项目一些文件引用文件是小写，但引用某个字母大写。vercel 会认为这是错误，并直接报错。

2.vercel部署的node版本问题。服务器和本地的node版本可能不一致。需要在项目设置中进行设置。

3.vercel 会根据你的项目自动识别框架并初始化默认配置，比如：默认输出目录是 `dist`，但事实上项目的输出目录并不是这个名字，这时需要在Build&Development Settings这个配置去手动修改。

4.网页在子路由中刷新可能会产生<span style='color:red'>404NOTFOUND</span>错误。需要在项目根目录新建一个vercel.json配置文件,指定一个重写规则。

```
{
  "rewrites" : [ { "source" : "/:path*", "destination" : "/index.html" } ]
}
```

- `":path*"` 是一个通配符，表示匹配所有路径
- `"destination": "/index.html"` 则指定了将所有请求重定向到 `index.html` 文件。

原理：前端路由的更改本质上是前端把**路由重定向后再渲染相应的页面**

**其实服务器上根本没有相应的前端资源，所以刷新后才会说出现404这个结果**

我们在打包后一般只有`index.html`这一个`html`文件，其他的`css`和`js`文件则是单独存放

其他资源都是通过引入到`index.html`使用

当路由改变时，前端路由库会解析URL从而让SPA单页面框架生成不同虚拟DOM，最后渲染生成不同的页面，从而达到了跳转路由的目的

**所以其实前端根本没有向后端发起请求！**

但是你刷新页面，浏览器会以当前URL进行请求，而服务器只有`index.html`这一请求资源，其他都是通过link和script标签加载，自然找不到对应资源，**所以才会404**

这个配置文件的效果就是:**直接把所有的请求都指向`index.html`，返回`index.html`后，路径则就会被js解析从而渲染相应页面**

#### 五。访问优化

1.域名解析使用cname解析到vercel.cdn.yt-blog.top。

2.通过Vercel官方提供的缓存进行加速。vercel.json配置

```
{
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    },
    {
      "source": "(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, s-maxage=86400, max-age=86400"
        }, {
          "key": "Vercel-CDN-Cache-Control",
          "value": "max-age=31536000"
        }
      ]
    }
  ]
}
```

