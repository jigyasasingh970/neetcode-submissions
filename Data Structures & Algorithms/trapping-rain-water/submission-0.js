class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        // build tallest to the left array
        const leftMax = new Array(n);
        leftMax[0] = height[0];
        for (let i=1; i<n; i++) {
            leftMax[i] = Math.max(leftMax[i-1], height[i]);
        }
        // build tallest to the right array
        const rightMax = new Array(n);
        rightMax[n-1] = height[n-1];
        for (let i=n-2; i>=0; i--) {
            rightMax[i] = Math.max(rightMax[i+1], height[i]);
        }
        // calculate water above each bar
        const water = new Array(n);
        let totalWater = 0;
        for (let i=0; i<n; i++) {
            water[i] = Math.min(leftMax[i], rightMax[i]) - height[i];
            totalWater+=water[i];
        }
        return totalWater;
    }
}
