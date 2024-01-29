var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (e) {
        return this.stack.push(e);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            return false;
        return this.stack.pop();
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty())
            return false;
        return this.stack[this.stack.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    Stack.prototype.size = function () {
        return this.stack.length;
    };
    return Stack;
}());
var stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
