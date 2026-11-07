class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // more space optimised w
        const l = nums.length;
        const output = new Array(l).fill(1);
        for (let i =1; i<l;i++) {
            output[i] = output[i-1]*nums[i-1];
        }
        // manipulate the output array with suffices
        let suffix = 1;
        for (let i=l-1; i>=0; i--) {
            output[i]*=suffix;
            suffix*=nums[i];
        } 
        return output;
    }
}
