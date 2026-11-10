class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // put everything in the set
        const s = new Set();
        for (const num of nums) {
            s.add(num);
        }
        let longest = 0;
        for (const num of nums) {
            // check if it is start of the sequence
            let length = 0;
            if (!s.has(num-1)) {
                length=1;
                let next = num+1;
                while(s.has(next)) {
                    length++;
                    next++;
                }
                if (length>longest) {
                    longest = length;
                }

            }
        }
        return longest;
    }
}
