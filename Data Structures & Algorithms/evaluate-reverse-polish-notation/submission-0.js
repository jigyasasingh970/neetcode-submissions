class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const ops = new Map([['+', (a,b)=>a+b],
        ['-', (a,b)=>a-b],
        ['*', (a,b)=>a*b],
        ['/', (a,b)=>Math.trunc(a/b)]]);

        const stack = [];
        for (const token of tokens) {
            if (ops.has(token)) {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(ops.get(token)(a,b));
            } else {
                stack.push(parseInt(token, 10));
            }
        }
        return stack.pop();
    }
}
