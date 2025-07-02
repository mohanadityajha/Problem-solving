// Given a string s, composed of different combinations of '(' , ')', '{', '}', '[', ']', 
// verify the validity of the arrangement.
// An input string is valid if:

        // 1. Open brackets must be closed by the same type of brackets.
        //  2. Open brackets must be closed in the correct order.
// Input: s = "{[{()}]}" // > <

function checkParenthesis(str) {
    const stack = []; // 
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];
    const matchingBrackets = { ')': '(', '}': '{', ']': '[' };

    for (let char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
                return false; // Mismatched or unbalanced brackets
            }
            stack.pop();
        }
    }

    return stack.length === 0; // If stack is empty, all brackets are matched
}

