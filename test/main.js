
var iStorage = require("../iStorage.min.js");

// length
iStorage.getLength(true);

// key
iStorage.getIndex(1, true);

// get
iStorage.getItem("key", true);

// set
iStorage.setItem("key1", 1, true);
iStorage.setItem("key2", "类型：字符串", true);
iStorage.setItem("key3", ["类型", "数组"], true);
iStorage.setItem("key4", { 类型: "JSON对象" }, true);

// get
iStorage.getItem("key1", true);
iStorage.getItem("key2", true);
iStorage.getItem("key3", true);
iStorage.getItem("key4", true);

// length
iStorage.getLength(true);

// key
iStorage.getIndex(1, true);

// remove
iStorage.removeItem("key1", true);
iStorage.removeItem("key2", true);
iStorage.removeItem("key3", true);

// clear
iStorage.clearAll(true);
