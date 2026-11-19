class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const currentMin = this.stack.length===0 ? val 
        : Math.min(val, this.stack[this.stack.length-1][1]);
        this.stack.push([val, currentMin]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length-1][1];
    }
}
