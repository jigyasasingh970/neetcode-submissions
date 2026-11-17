class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1;
        let maxArea = 0;
        while (left < right) {
            let currentArea = 
            (right-left)*Math.min(heights[left], heights[right]);
            maxArea = Math.max(currentArea, maxArea);
            if (heights[left] < heights[right])
                left++;
            else
                right--;
        }
        return maxArea;

    }
}
