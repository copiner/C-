

### react-router
react-router 封装的这些组件，是不允许你自定义传props的。只支持那几个固定的，比如history，
params，location，route等等，都是跟路径参数有关的。
如果想传一些自定义的数据，可以结合redux，直接connect往组件里传store。。
因为你直接给Router或者Route穿props 其实是给了Router组件，它不会帮你做注入props。
可以自己尝试封装一层

### react-router传参

一、

```javascript

<Route path='/about/:id' component={About} />
跳转方式
//传递参数可以拆分为对象写法：{pathname:'/about/3'}
//html:
<Link to={'/about/3'}>点击跳转</Link>
//js：
this.props.history.push('/about/3')
获取值
this.props.match.params.id  // 3

```

二、
```javascript
2、query传参
特点：刷新页面参数消失，参数不会在地址栏显示

路由配置
<Route path='/about' component={About} />
跳转方式
//html:
<Link to={{pathname:'/about', query:{id:3}}}>点击跳转</Link>
//js：
this.props.history.push({pathname:'/about', query:{id:3}})
获取值
this.props.location.query.id  // 3
```

三、
```javascript
state传参
特点：刷新页面参数不消失,参数不会在地址栏显示

路由配置
<Route path='/about' component={About} />
跳转方式
  //html:
  <Link to={{pathname:'/about', state:{id:3}}}>点击跳转</Link>
  //js：
  this.props.history.push({pathname:'/about', state:{id:3}})
获取值
this.props.location.state.id  // 3
```


<meta http-equiv="pragma" content="no-cache"/>
<meta http-equiv="Cache-Control" content="no-cache, must-revalidate"/>
<meta http-equiv="expires" content="0"/>
首先，缓存问题依靠html的meta标签解决是不靠谱的，一般大型网站都依靠nginx server在 http头中对静态资源设置缓存。

而影响缓存的http头有好几个，尽管http 1.1协议之后，从协议本身的规范的角度可以认为 只要有cache-control这个头存在，pragma expires就无效了，但你不能相信所有浏览器所有版本都完全按照标准进行了实现，所以，比较职业的做法是把所有该下发的http头都派发过去，更保险一些。

在你的截图中，我看到response headers里缺少expires字段，并且你虽然cache-control给了个3600（注意这里的单位是second 相当于缓存时间是1小时，考虑到服务器时间与客户端机器的时间有可能存在一些差异，如果真希望缓存的静态资源，不建议给这么小的max-age），然而你设置了pragma:no-cache，这显然是你的apache服务器配置的问题，我估计你的conf文件是从网上随便找了一份，设置缓存时忘记去掉这一行了，pragma建议去掉，当然也可以查一下文档这个头该怎么设置缓存值，设一个长一些的。

另外，我还注意到，你在浏览器中直接以127.0.0.1的ip地址进行访问，依靠chrome内核（准确说叫blink，google基于webkit项目切出的一个分支，目前作为chrome浏览器内核）解析网页的所有浏览器，在这种直接访问ip地址的场景下都会表现出一些诡异的情况，有时是缓存与线上不一样，有时是跨域的CORS策略会与线上不同，所以你再本地做实验 最好绑个host，也不要直接localhost访问。

最后，再科普一个知识，chrome浏览器为了优化页面加载速度，做了非常复杂的缓存和预加载策略，当你点F5（win系统）或command-R(mac系统)刷新浏览器时，通常是穿透缓存的，而当你在地址栏里输入后直接回车时，往往会被缓存cache住。说的再深一点，当你在浏览器地址栏里输入地址时，出现那个下拉提示菜单，如果你选择了菜单中的一个提示选项而不是自己手动敲完整个地址url的话，实际上你还没点回车时 这个http请求就已经发出去了，所以有时会发现 在地址栏里直接选自己之前访问过的页面时 请求速度特别快，实际上是chrome的预加载机制。

缓存是比较复杂的问题，与之相关的任何一个环节设置错误都可能导致结果与预期相左
