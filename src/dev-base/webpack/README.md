
### 一、webpack构建包脚本

* 1、创建package.json管理node包信息文件：`npm init;`

* 2、package.json中scripts脚本
	```
	"scripts": {
	    "start": "webpack-dev-server",//执行`npm start` 相当于执行`webpack-dev-server`命令启动服务器
	    "prod": "webpack -p"//执行`npm run prod` 相当于执行`webpack -p`打包命令
	}
	```
	
* 3、`react`相关库
	```
	npm install react --save;//react核心库
	npm install react-dom --save;//react操作dom库
	```

* 4、`Babel`- -编译JSX
	```
	npm install --save-dev babel-core;//babel核心
	npm install --save-dev babel-loader;	//webpack中babel编译器
	npm install --save-dev babel-preset-react;	//react的JSX编译成js
	```

* 5、`html-webpack-plugin` - - 修改html文件插件
`npm install --save-dev html-webpack-plugin`;

* 6、`webpack`相关库
	```
	npm install --save-dev webpack;	//webpack核心
	npm install --save-dev webpack-dev-server;	//webpack服务器
	```
* **

* 7、`.babelrc` - - 设置webpack的loader加载器(babel编译器)规则

	```
	{
	  "presets": [
	    "react"
	  ]
	}
	```
* 8、`webpack.config.js` - - webpack配置

```
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html', //指定html模板目录路径
  filename: 'index.html',    //新建文件名
  inject: 'body' //<script>[output的filename(index_bundle.js)]</script>查到body中,另可插head
});

module.exports = {
  entry: [
    './app/js/app.jsx'    //app.js是主入口jsx
  ],
  output: {  //指定输出目录和输出文件名index_bundle.js
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [ //正则：以jsx结尾；排除node_modules目录；babel加载器
      {test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
```

##二、网页index.html

```
./app/index.html
//html最轻量化，<script>都没有。
//webpack配置中html-webpack-plugin插件自动插入转换并拼接后的js到<script>中
```

##三、jsx源码均放在./app/jsx目录下
其中模块化管理jsx

## 总结

index.html文件和webpack构建包命令不变，每次开发React时，
只需要在./app/jsx目录下编写React组件的jsx代码即可




