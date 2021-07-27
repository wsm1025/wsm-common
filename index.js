function wsm(a){
    var lyric = a.split('\n');
    var arr = new Array();
    for (var x in lyric) {
        arr.push({0:s(lyric[x]),1:m(lyric[x])})
    }
    return  arr;
}

function s(b){
    b = b.substring(0, b.length);
    b = b.substring(b.indexOf("[")+1,b.indexOf("]"))
    return b;
}

function m(c){
    var index = c.lastIndexOf("\]");
    c = c.substring(index + 1, c.length);
    return c
}
export default wsm