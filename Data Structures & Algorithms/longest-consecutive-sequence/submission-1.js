class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // put everything in the set
        // cleaned up version
        const s = new Set(nums);
        let longest = 0;
        // loop over the set for a better time complexity
        for (const num of s) {
            // check if it is start of the sequence
            if (!s.has(num-1)) {
                let length=1;
                let next = num+1;
                while(s.has(next)) {
                    length++;
                    next++;
                }
                longest = Math.max(length,longest);

            }
        }
        return longest;
    }
}
