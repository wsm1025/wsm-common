const isNum =(val)=> !isNaN(val);
const max = (a,b)=>a>b ? a - 0 : b - 0; 
const min = (a,b)=>a>b ? b - 0 : a - 0; 
export {
    isNum,
    max,
    min
}