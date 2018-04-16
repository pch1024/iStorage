<h1 align="center">iStorage</h1>
<p align="center">:ghost: :anger::ghost::anger::ghost::anger::ghost::anger::ghost:</p>

> Local Storage 是 HTML 5 新增的一个本地存储 API，所谓 Local Storage 就是一个小仓库的意思，它有 5 M 的大小空间，存储在浏览器中，我们可以通过 JavaScript 来操纵 Local Storage。

## iStorage 介绍

`iStorage`是针对浏览器 `Local Storage` 的一个便捷操作插件。它支持用户直接`存储`和`获取`数字(非 NaN)、字符串、数组、JSON 类型数据。

`iStorage` 是基于原生 JavaScript 实现的，它编译压缩后仅 2kb 左右，请放心试用。也是作者的第一个 NPM 插件，不足之处还请见谅和指正。

## iStorage 安装

iStorage 支持 `CommonJS` `RequireJS` `<script>` 方式引入。

```js
// NPM 安装
npm i istorage

// ES6
import iStorage from "istorage";

// require
var iStorage = require('istorage');

// html
<script src="http://peichenhu.cn/doc/lib/iStorage.min.js"></script>
```

## iStorage 使用

iStorage 支持 `getLength` `getIndex` `getItem` `setItem` `removeItem` `clearAll` 操作。`debug` 尾参数可选，用于在控制台打印操作详情日志。

```js
// 获取 Local Storage Length
iStorage.getLength(debug: Boolean);

// 根据 Local Storage 的长度（length）作为索引值，来获取键名
iStorage.getIndex(index：Number, debug: Boolean);

// 依据键名获取值
iStorage.getItem(key: String, debug: Boolean);

// 添加键值对,值类型允许长度为0
iStorage.setItem(key:String, value:!NaN || Number || String || Array || JSON, debug:Boolean)

// 删除键值对
iStorage.removeItem(key: String, debug: Boolean);

// 清楚该域的所有Local Storage 记录
iStorage.clearAll(key: String, debug: Boolean);
```

## iStorage 本地测试

```js
// 请先fork,下载到本地后命令行初始化开发调试环境：
> npm i // 安装 uglify-js 用于压缩生产
> npm test // webpack-dev-server open: http://localhost:9000/

// 若要修改插件,比如 0.0.3 版，请参考以下指令
// 修改未压缩版本 iStorage.js, 修改完后，使用 uglify-js 压缩
> uglifyjs iStorage.js  -m -c -o iStorage.min.js
```

## iStorage 未来

使用 TypeScript 重构，添加 sessionStorage 和 cookie，并希望支持异步操作.

## 更新日志

### 0.0.1

第一版代码比较粗糙，仅用于验证代码结构和方法的设计、插件的实际用途。基本实现了数字、字符串、数组、JSON 对象四种基本数据的类型检测，直接存储和获取;方法上实现了:

* check: 检查某个键名是否存在
* get：获取某个键名的值
* set：设置键值对
* remove：根据键名删除某个键值对

详见 [redeme@0.0.1](0.0.1/README.md)

### 0.0.2

该版本在代码上进行了完善，并提供了更好 debug log 信息。

详见 [redeme@0.0.2](0.0.2/README.md)

### 0.0.3

此版本改动较大，涉及方法名称的语义化，新方法的添加，check 方法废弃，新增本地 Webpack 调试代码，debug log 信息进一步优化。
