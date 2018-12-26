
// 散列
function hashTable() {
    this.table = new Array(137);
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    // this.get = get;
}

function betterHash(str,arr) {
    var total = 0;
    var H = 37;
    for (var i = 0; i < str.length ; ++i) {
        total += H * total + str.charCodeAt(i);
    }
    total =  total % arr.length;
    return parseInt(total);

}

function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[1] !== undefined){
            print(i + ':' + this.table[i])
        }
    }
}