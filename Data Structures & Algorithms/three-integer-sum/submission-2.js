class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        const results = [];
        for (let i=0; i<nums.length; i++) {
            // avoid duplicates
            if (i>0 && nums[i]=== nums[i-1]) continue;
            const targetSum = -1*nums[i];
            let left = i+1;
            let right = nums.length-1;
            while (left < right) {
                const sum = nums[left] + nums[right];
                if (sum === targetSum){
                    results.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    // skip second duplicates
                    while (left<right && nums[left]==nums[left-1]) left++;
                }
                if (sum > targetSum)
                    right--;
                if (sum < targetSum)
                    left++;
            }
        }
        return results;
    }
}
