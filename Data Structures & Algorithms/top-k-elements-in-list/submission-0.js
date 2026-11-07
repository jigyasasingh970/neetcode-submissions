class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // naive solution
    topKFrequent(nums, k) {
        // create a frequency map
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num)||0)+1);
        }
        // sort the entries in descending order
        const sorted = [...freq.entries()].sort((a,b)=>b[1]-a[1]);
        const keys = sorted.map(([key,value])=>key);
        const output = keys.slice(0,k);
        return output;

    }
}
