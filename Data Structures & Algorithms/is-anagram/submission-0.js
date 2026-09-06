class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sortedS = [...s].sort().join("");
        const sortedT = [...t].sort().join("");

        return sortedS === sortedT;
    }
}

  
// const s = new Solution();
    
// s.isAnagram("racecar", "carrace") == true
// s.isAngaram("jar", "jam") == false
// s.isAnagram("x", "x") == true
// s.isAnagram("x", "xx") == false
// s.isAngaram("abc", "aab") == false
// s.isAngaram("aabc", "caba") == true

