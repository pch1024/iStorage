<h1 align="center">localStorage</h1>
<p align="center">:ghost::ghost::ghost::ghost::ghost:</p>

# iStorage 是什么

iStorage 是针对浏览器 localStorage 的一个便捷操作插件。它支持用户直接传值（支持直接存储数字(非 NaN)、字符串、数组、JSON 类型），并且直接返回同样的值。
iStorage 是基于原生 JS 实现的，不依赖任何框架。它编译压缩后是 1.77kb，是一款非常轻量的 JS lib。作者的第一个 NPM 插件，不足之处还请见谅和指正。

# iStorage 怎么用

## iStorage 支持 `CommonJS` `RequireJS` `<script>` 方式引入。

### npm

```js
npm i -s istorage
import iStorage from "istorage";
```

### 其他

```html
<script src="iStorage.min.js"></script>
```

## iStorage 支持 `Check` `Get` `Set` `Remove` 操作。`debug` 参数可选，用于在控制台打印操作详情日志。

### Check

```js
iStorage.check((key: String), (debug: Boolean));
```

### Get

```js
iStorage.get((key: String), (debug: Boolean));
```

### Set

```js
iStorage.set(key:String, value:!NaN || Number || String || Array || JSON, debug:Boolean)
```

### Remove

```js
iStorage.remove((key: String), (debug: Boolean));
```
## Testing

```js
// success
iStorage.get('testing',true);
iStorage.check('testing',true);
iStorage.remove('testing',true);

iStorage.check('testing',1,true);
iStorage.get('testing',1,true);
iStorage.set('testing',1,true);
iStorage.remove('testing',1,true);

iStorage.remove('testing',true);
iStorage.set('testing',[],true);
iStorage.set('testing',[1],true);
iStorage.get('testing',true);
iStorage.check('testing',true);

iStorage.set('testing',"",true);
iStorage.set('testing',"1",true);
iStorage.check('testing',true);
iStorage.remove('testing',true);
iStorage.get('testing',true);

iStorage.set('testing',{a:1},true);
iStorage.set('testing',{},true);

// error
iStorage.set('');
iStorage.set('testing');
iStorage.set('testing',true);

iStorage.set('testing',null,true);
iStorage.set('testing',undefined,true);
iStorage.set('testing',NaN,true);

```