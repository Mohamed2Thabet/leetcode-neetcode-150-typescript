class Solution {
  isAnagram(s: string, t: string): boolean {
    return s.split("").sort().join("") === t.split("").sort().join("");
  }
}

const solution = new Solution();

console.log(solution.isAnagram("racecar", "carrace")); // true
console.log(solution.isAnagram("jar", "jam")); // false

console.log(solution.isAnagram("anagram", "nagaram")); // true
console.log(solution.isAnagram("rat", "car")); // false
console.log(solution.isAnagram("", "")); // true
console.log(solution.isAnagram("a", "a")); // true
console.log(solution.isAnagram("ab", "ba")); // true
console.log(solution.isAnagram("abc", "abd"));
