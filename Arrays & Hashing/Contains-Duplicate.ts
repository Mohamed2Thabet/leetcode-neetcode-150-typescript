class Solution {
  hasDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  }
}

const solution = new Solution();

console.log(solution.hasDuplicate([1, 2, 3, 1])); // true
console.log(solution.hasDuplicate([1, 2, 3, 4])); // false
