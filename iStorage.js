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
   * 键名检查
   * @param {String} key
   * @param {Boolean} debug
   */
  IStorage.prototype.check = function(key, debug) {
    if (debug) {
      if (localStorage.getItem(key)) {
        console.log("check success: " + key + localStorage.getItem(key));
      } else {
        console.log("check failure: not find " + key);
      }
    }
    return localStorage.getItem(key) ? true : false;
  };

  /**
   * 依据键名获取值
   * @param {String} key
   * @param {Boolean} debug
   */
  IStorage.prototype.get = function(key, debug) {
    if (!this.check(key)) {
      if (debug) console.log("get failure:" + key);
      return localStorage.getItem(key);
    } else {
      if (debug) console.log("get success:" + key + localStorage.getItem(key));
      return JSON.parse(localStorage.getItem(key)).iStorage;
    }
  };

  /**
   * 添加键值对,值类型允许长度为0
   * @param {String} key
   * @param {!NaN||Number||String||Array||JSON} value
   * @param {Boolean} debug
   */
  IStorage.prototype.set = function(key, value, debug) {
    value = this.handlerValue(value);
    localStorage.setItem(key, value);
    if (debug) console.log("set success: " + key + value);
    return this.get(key);
  };

  /**
   * 删除键值对
   * @param {String} key
   * @param {Boolean} debug
   */
  IStorage.prototype.remove = function(key, debug) {
    if (debug && this.check(key)) {
      console.log("remove success: " + key + this.get(key));
    } else {
      console.log("remove failure: not find " + key);
    }
    localStorage.removeItem(key);
    return this.get(key);
  };

  var iStorage = new IStorage();
  return iStorage;
});
