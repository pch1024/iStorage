(function(definition) {
  "use strict";
  // CommonJS
  if (typeof exports === "object" && typeof module === "object") {
    module.exports = definition();
    // RequireJS
  } else if (typeof define === "function" && define.amd) {
    define(definition);
    // <script>
  } else if (typeof window !== "undefined" || typeof self !== "undefined") {
    // Prefer window over self for add-on scripts. Use self for
    // non-windowed contexts.
    var global = typeof window !== "undefined" ? window : self;

    // initialize iStorage as a global.
    global.iStorage = definition();
  } else {
    throw new Error(
      "This environment was not anticipated by iStorage,Please file a bug."
    );
  }
})(function() {
  /**
   * 构造组合原型函数，伪经典继承
   */
  function IStorage() {
    this.data = {
      iStorage: null
    };
    this.tip =
      "value only support Number(not include NaN)、String、Array、JSON ！But you gave：";
  }

  /**
   * 值类型检测并处理转化成JSON字符串
   * @param {String} value
   */
  IStorage.prototype.handlerValue = function(value) {
    var type = Object.prototype.toString.call(value);
    switch (type) {
      case "[object Number]":
        if (isNaN(value)) throw this.tip + "NaN";
        this.data.iStorage = value;
        break;
      case "[object String]":
        this.data.iStorage = value;
        break;
      case "[object Array]":
        this.data.iStorage = value;
        break;
      case "[object Object]":
        this.data.iStorage = value;
        break;
      default:
        throw this.tip + type;
    }
    return JSON.stringify(this.data);
  };

  /**
   * 获取 Local Storage Length
   * @param {Boolean} debug
   */
  IStorage.prototype.getLength = function(debug) {
    if (debug) console.log("Local Storage length is ", localStorage.length);
    return localStorage.length;
  };

  /**
   * 根据 Local Storage 的长度（length）作为索引值，来获取键名
   * @param {Number} index 
   * @param {Boolean} debug 
   */
  IStorage.prototype.getIndex = function(index, debug) {
    if (
      Object.prototype.toString.call(index) === "[object Number]" &&
      !isNaN(index)
    ) {
      if (debug) console.log("index: ",index,'is', localStorage.key(index));
      return localStorage.key(index);
    } else {
      console.log("Key must number!");
    }
  };

  /**
   * 依据键名获取值
   * @param {String} key
   * @param {Boolean} debug
   */
  IStorage.prototype.getItem = function(key, debug) {
    if (!localStorage.getItem(key)) {
      if (debug) console.log("get failure:", key);
      return localStorage.getItem(key);
    } else {
      if (debug) console.log("get success: ", key, JSON.parse(localStorage.getItem(key)).iStorage);
      return JSON.parse(localStorage.getItem(key)).iStorage;
    }
  };

  /**
   * 添加键值对,值类型允许长度为0
   * @param {String} key
   * @param {!NaN||Number||String||Array||JSON} value
   * @param {Boolean} debug
   */
  IStorage.prototype.setItem = function(key, value, debug) {
    value = this.handlerValue(value);
    localStorage.setItem(key, value);
    if (debug) console.log("set success: ", key, value);
    return this.getItem(key);
  };

  /**
   * 删除键值对
   * @param {String} key
   * @param {Boolean} debug
   */
  IStorage.prototype.removeItem = function(key, debug) {
    if (debug && localStorage.getItem(key)) {
      console.log("remove success: ", key, this.getItem(key));
    } else {
      console.log("remove failure: not find ", key);
    }
    localStorage.removeItem(key);
    return this.getItem(key);
  };
  
  /**
   * 清楚该域的所有Local Storage 记录
   * @param {Boolean} debug
   */
  IStorage.prototype.clearAll = function(debug) {
    if (debug) console.log("Clear done !");
    localStorage.clear();
  };

  return new IStorage();
});
