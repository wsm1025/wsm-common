import { isNum, max, min } from "./util/index.js";
function randomNumb(a, b, c = 100) {
  try {
    var num = isNum(a) || isNum(b) || isNum(a - 0) || isNum(b - 0);
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
  } catch {
    throw new Error("传入参数错误");
  }
}
const localDB = {
  isWindow: () => {
    if (typeof window === 'undefined' ) {
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
export {
    randomNumb,
    localDB
}