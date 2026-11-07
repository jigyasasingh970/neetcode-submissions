class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // optimised solution with O(n) time O(n) space
    topKFrequent(nums, k) {
        // create a frequency map
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num)||0)+1);
        }
        // create buckets
        const buckets = Array.from({length: nums.length+1}, ()=>[]);
        for (const [key,value] of freq) {
            buckets[value].push(key);
        }
        const output = [];
        for (let i = buckets.length-1; i>=0;i--) {
            for (const item of buckets[i]) 
                output.push(item);
            if (output.length ===k)
                return output;
        }
    }
}
