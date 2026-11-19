class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // cleaner solution
    isValid(s) {
        const stack = [];
        const pairs = new Map([[')','('], ['}','{'], [']','[']]);
        for (const ch of s) {
            if (pairs.has(ch)) {
                if (stack.pop()!==pairs.get(ch))
                    return false;
            } else {
                stack.push(ch);
            }
        }

        return stack.length==0;
    }
}
