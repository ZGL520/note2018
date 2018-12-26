function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.clear = clear;
    this.peek = peek;
    this.length = length;
}

function push(e) {
    this.dataStore[this.top++] = e;
}
function peek() {
    return this.dataStore[this.top - 1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}

const s = new Stack();

s.push(1);
s.push(2);
console.log(s);
s.pop();
console.log(s);
s.peek();
console.log(s);
s.push(3);
s.push(4);
s.push(5);
console.log(s.length);
s.clear();

