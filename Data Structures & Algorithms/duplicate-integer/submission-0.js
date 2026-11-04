class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // my second attempt using hashing

    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if(seen.has(num)){
                return true;
            }
            seen.add(num);

        }
        return false;
    }
}
