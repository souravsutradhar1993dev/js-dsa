class Stack {
    stack: any[];
    constructor() {
        this.stack = [];
    }
    push(e: any) {
        return this.stack.push(e);
    }
    pop() {
        if(this.isEmpty()) return false;
        return this.stack.pop();
    }
    peek() {
        if(this.isEmpty()) return false;
        return this.stack[this.stack.length - 1];
    }
    isEmpty(): boolean {
        return this.stack.length === 0;
    }
    size(): number {
        return this.stack.length;
    }
}

const stack = new Stack();
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.push(4))
console.log(stack.size())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.size())