function isValid(str) {
    var brackets = {
        '[': ']',
        '{': '}',
        '(': ')'
    };
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        if (i > 0) {
            if (brackets[stack[stack.length - 1]] === str[i]) {
                stack.pop();
                continue;
            }
        }
        stack.push(str[i]);
    }
    return stack.length === 0;
}
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
