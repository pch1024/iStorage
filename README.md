<h1 align="center">iStorage</h1>
<p align="center">:ghost: :anger::ghost::anger::ghost::anger::ghost::anger::ghost:</p>

> Local Storage 是 HTML 5 新增的一个本地存储 API，所谓 Local Storage 就是一个小仓库的意思，它有 5 M 的大小空间，存储在浏览器中，我们可以通过 JavaScript 来操纵 Local Storage。

## iStorage 介绍

`iStorage`是针对浏览器 `Local Storage` 的一个便捷操作插件。它支持用户直接`存储`和`获取`数字(非 NaN)、字符串、数组、JSON 类型数据。

`iStorage` 是基于原生 JavaScript 实现的，它编译压缩后仅 1.5kb 左右，请放心试用。也是作者的第一个 NPM 插件，不足之处还请见谅和指正。

## iStorage 安装

iStorage 支持 `CommonJS` `RequireJS` `<script>` 方式引入。

```js
// NPM 安装
npm i -s istorage

// ES6
import iStorage from "istorage";

// require
var iStorage = require('istorage');

// html
<script src="http://peichenhu.cn/doc/lib/iStorage.min.js"></script>
```

## iStorage 使用

iStorage 支持 `Check` `Get` `Set` `Remove` 操作。`debug` 参数可选，用于在控制台打印操作详情日志。

```js
// check
iStorage.check(key: String, debug: Boolean);


// Get
iStorage.get(key: String, debug: Boolean);


// Set
iStorage.set(key:String, value:!NaN || Number || String || Array || JSON, debug:Boolean)


// Remove
iStorage.remove(key: String, debug: Boolean);
```

## iStorage 测试

[JS Bin](http://jsbin.com/pelumoh/edit?js,console)

http://jsbin.com/pelumoh/edit?js,console

## iStorage 未来

之后将陆续添加 sessionStorage 和 cookie，并希望支持异步操作.
