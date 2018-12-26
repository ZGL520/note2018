let reg = /asdf/g;

function getReg(str) { //此功能等于 reg.flags
    let text = reg.toString(str);
    let ret = text.substring(text.lastIndexOf('/')+1);
    return ret;
}

let  ret = getReg(reg);

console.log(ret,reg.source,reg.flags);

function args(url,timeout=2000,callback = function(){console.log(1)}) {
    console.log(url,timeout,callback())
}

args();
args(2,3,()=>{console.log(6)});
args(0,null,)
args(0,undefined)

function obj(name,age) {
    return {
        name,
        age,
        say(){
            console.log(name,age)
        }
    }
}
let zgl = obj('zgl',19);
zgl.say()

// console.log(NaN === NaN);
// console.log(isNaN(NaN) === isNaN(NaN));
// console.log(Object.is(NaN,NaN));
// console.log(Object.is(+0,-0));
// console.log(Object.is(1,'1'));
// console.log(Object.is('1',"1"));