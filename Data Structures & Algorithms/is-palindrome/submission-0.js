class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNum = (ch)=>/[a-z0-9]/i.test(ch);
        let left = 0;
        let right = s.length-1;
        while(left < right) {
            while(left<right && !isAlphaNum(s[left])) left++;
            while(left<right && !isAlphaNum(s[right]))
                right--;
            if (s[left].toLowerCase() !== s[right].toLowerCase())
                return false;
                left++;
                right--;    
        }
        return true;
    }
}
