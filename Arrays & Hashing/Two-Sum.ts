class Solution {
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (map.has(complement)) {
                return [map.get(complement)!, i];
            }

            map.set(nums[i], i);
        }

        return [];
    }
}

const solution = new Solution();

console.log(solution.twoSum([3, 4, 5, 6], 7));   // [0, 1]
console.log(solution.twoSum([4, 5, 6], 10));     // [0, 2]
console.log(solution.twoSum([5, 5], 10));        // [0, 1]
console.log(solution.twoSum([2, 7, 11, 15], 9)); // [0, 1]