class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length)
            return false;
        const m = new Map();
        // create a frequency map for string s
        for (const ch of s){
            m.set(ch, (m.get(ch)|| 0) + 1);
        }
        for (const ch of t) {
            if (!m.has(ch))
                return false;
            const c = m.get(ch)-1;
            if (c < 0) return false;
            m.set(ch,c);
        }
        return true;
    }
}
