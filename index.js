import { isNum, max, min, Hexcolor } from "./util/index.js";
import axios from "axios";

const STATIC_DATA = 'http://v1.hitokoto.cn?c=a'; 
function randomNumb(a, b, c = 0) {
  try {
    var num = isNum(a) && isNum(b);
    if (!num) {
      throw new Error("传入的参数为数字或者数字字符串");
    }
    //防止小数部分过多
    if (c > 20) {
      c = 0;
    }
    const res = (Math.random() * (max(a, b) - min(a, b)) + min(a, b)).toFixed(
      c
    );
    return res;
  } catch (err) {
    throw new Error(err);
  }
}
const localDB = {
  isWindow: () => {
    if (typeof window === "undefined") {
      throw new Error("请在浏览器下调用此方法");
    }
  },
  set: (key, val) => {
    localDB.isWindow();
    return window.localStorage.setItem(key, val);
  },
  del: (key) => {
    localDB.isWindow();
    return window.localStorage.removeItem(key);
  },
  get: (key) => {
    localDB.isWindow();
    return window.localStorage.getItem(key);
  },
  clear: () => {
    localDB.isWindow();
    return window.localStorage.clear();
  },
};

function Rgba(a, isA = true) {
  if (isNum(a)) {
    if (a > 1) a = 1;
    if (a < 0) a = 0;
    const r = randomNumb(0, 255);
    const g = randomNumb(0, 255);
    const b = randomNumb(0, 255);
    const res = `rgba(${r},${g},${b},${a})`;
    if (isA) {
      return res;
    }
    return Hexcolor(res);
  } else {
    throw new Error("第一个参数应为0～1的数字或字符串数字");
  }
}
// 驼峰转连字符
function fromCamelCase(str, separator = "_") {
  return str
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
    .toLowerCase();
}
// 连字符转驼峰
function CamelCase(str, separator = "-") {
  let a;
  let b = [];
  a = str.split(separator);
  for (let i = 0; i < a.length; i++) {
    if (i === 0) {
      b.push(a[i]);
    } else {
      b.push(a[i].replace(a[i][0], a[i][0].toUpperCase()));
    }
  }
  return b.join("");
}
const WAjax = axios;
WAjax.defaults.timeout = 5000
//静态数据
function staticData(val = STATIC_DATA) {
  return new Promise((success, fail) => {
    axios(val)
      .then((res) => {
        success(res.data);
      })
      .catch((err) => fail(err));
  })
    .then((val) => {
      return val;
    })
    .catch((err) => {
      console.error("err:", err);
    });
}
export {
  randomNumb,
  localDB,
  Rgba,
  fromCamelCase,
  CamelCase,
  WAjax,
  staticData,
};
