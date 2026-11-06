class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        for (const str of strs) {
            //make a key for each word
            const count = new Array(26).fill(0);
            const a = "a".charCodeAt(0);
            for (const ch of str) {
                const characterIndex = ch.charCodeAt(0)-a;
                count[characterIndex]++;
            }
            const key = count.join("#");
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(str);
            
        }
        return [...groups.values()];
    }
}
