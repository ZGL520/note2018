let values = [1,2,3];
let ite = values[Symbol.iterator]();

console.log(ite.next());
console.log(ite.next());
console.log(ite.next());

/*检查对象是否可迭代*/
function isIteable(object) {
    return typeof  object[Symbol.iterator] === 'function';
}

console.log(isIteable(values));

/*创建可迭代对象*/

let collection = {
    item:[],
    *[Symbol.iterator](){
        for (let item of this.item){
            yield item
        }
    }
};

collection.item.push(1);
collection.item.push(2);
collection.item.push(3);

for (let item of collection){
    console.log(item)
}