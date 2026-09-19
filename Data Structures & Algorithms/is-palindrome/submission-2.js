class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // chop in the middle
        // if the s.length is even, return false
        // s.length is odd number.

        // compare the chopped sentences

        const str = s.replace(/[^0-9A-Z]+/gi, "").toLowerCase();
        return str === str.split('').reverse().join('');
    }
}
