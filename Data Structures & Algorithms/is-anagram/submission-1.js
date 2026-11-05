class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // since all are lowercase letters
    // we can also use a fixed size array
    isAnagram(s, t) {
        if (s.length !== t.length)
            return false;
        const count = new Array(26).fill(0);
        const a = "a".charCodeAt(0); // 97
        for (let i=0; i<s.length; i++) {
            count[s.charCodeAt(i)-a]++;
            count[t.charCodeAt(i)-a]--;
        }
        return count.every(c => c===0);
    }
}
