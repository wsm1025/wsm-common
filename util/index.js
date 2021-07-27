const isNum = (val) => !isNaN(val);//判断是否为数字 isNum(3)=> true
const max = (a, b) => (a > b ? a - 0 : b - 0);
const min = (a, b) => (a > b ? b - 0 : a - 0);
const Hexcolor = (color) => {
  var rgb = color.split(",");
  if(rgb.length !== 4){
      throw new Error('传入的参数有问题,eg:rgba(255,232,186,0.4)')
  }
  var r = parseInt(rgb[0].split("(")[1]);
  var g = parseInt(rgb[1]);
  var b = parseInt(rgb[2].split(")")[0]);
  var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
};
export { isNum, max, min, Hexcolor };
