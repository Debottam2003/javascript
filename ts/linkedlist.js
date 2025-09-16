"use strict";
class ListNode {
    constructor(data, next) {
        this.data = 0;
        this.next = null;
        this.data = data;
        this.next = next;
    }
}
let head = null;
function create(data) {
    let newnode = new ListNode(data, null);
    if (head === null) {
        head = newnode;
        return;
    }
    let temp = head;
    while (temp.next !== null) {
        temp = temp.next;
    }
    temp.next = newnode;
    return;
}
function print() {
    let temp = head;
    while (temp !== null) {
        console.log(temp.data);
        temp = temp.next;
    }
}
(function main() {
    create(10);
    create(20);
    create(30);
    create(40);
    create(50);
    print();
})();
