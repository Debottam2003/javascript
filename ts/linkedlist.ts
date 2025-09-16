class ListNode {
  public data: number = 0;
  public next: ListNode | null = null;
  constructor(data: number, next: ListNode | null) {
    this.data = data;
    this.next = next;
  }
}

let head: ListNode | null = null;
function create(data: number): void {
  let newnode: ListNode = new ListNode(data, null);
  if (head === null) {
    head = newnode;
    return;
  }
  let temp: ListNode = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = newnode;
  return;
}

function print(): void {
  let temp: ListNode | null = head;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

(function main(): void {
  create(10);
  create(20);
  create(30);
  create(40);
  create(50);
  print();
})();
