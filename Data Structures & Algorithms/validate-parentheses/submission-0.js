class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (let i=0; i<s.length; i++) {
            // push opening brackets on the stack
            // for every closing bracket check if it matches
            // the top of the stack
            if (s[i]==='(' || s[i]==='[' || s[i]==='{') {
                stack.push(s[i]);
            }
            else if (s[i]===')') {
                if (stack.length > 0 && stack[stack.length-1]==='(')
                     stack.pop();
                else {
                    return false;
                }     
            }
            else if (s[i]==='}') {
                if (stack.length > 0 && stack[stack.length-1]==='{')
                     stack.pop();
                else {
                    return false;
                }     
            }
            else if (s[i]===']') {
                if (stack.length > 0 && stack[stack.length-1]==='[')
                     stack.pop();
                else {
                    return false;
                }     
            }
        }
        if (stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
