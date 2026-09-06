class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const diff = target - num;
            
            const diffIndex = hashMap.get(diff);
            
            if (diffIndex !== undefined) {
            
                return [diffIndex, i]
            } else {
                hashMap.set(num, i);
            }
        }

    }
}
