class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];
        stack.push(0);
        for (let i=1; i<temperatures.length; i++) {
            while (stack.length>0 && temperatures[i] > 
            temperatures[stack[stack.length-1]]) {
                let popped = stack.pop();
                result[popped] = i-popped;
            }
            stack.push(i);
        }
        return result;
    }
}
