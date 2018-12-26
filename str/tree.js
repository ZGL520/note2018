// tree

function Node(data,left,right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BRT() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}

//中序遍历
function inOrder(node) {
    if (!(node == null)){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right)
    }
}

//先序访问
function preOrder(node) {
    if (!(node == null)){
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

//后序访问
function postOrder(node) {
    if (!(node == null)){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}

//获取最小值
function getMin() {
    let current = this.root;
    while (current.left !== null){
        current = current.left;
    }
    return current.data;
}

//获取最大值
function getMax() {
    let current = this.root;
    while (current.right !== null){
        current = current.right;
    }
    return current.data
}

//查找指定值
function find(data) {
    let current = this.root;
    while (current != null){
        if (current.data == data){
            return current
        } else if (data < current.data){
            current = current.left;
        } else if (data >current.data){
            current = current.right;
        }
    }
    return null;
}

function insert(data) {
    let n = new Node(data,null,null);
    if (this.root == null){
        this.root = n;
    } else {
        let current = this.root;
        let parent;
        while (true){
            parent = current;
            if (data < current.data){
                current = current.left;
                if (current == null){
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break
                }
            }
        }
    }
}

let b = new BRT();
b.insert(23);
b.insert(45);
b.insert(16);
b.insert(37);
b.insert(3);
b.insert(99);
b.insert(22);



b.inOrder(b.root);
console.log('/n');
b.preOrder(b.root);
console.log('/n');
b.postOrder(b.root);
console.log(b.getMin());
console.log(b.getMax());
console.log(b.find(3));