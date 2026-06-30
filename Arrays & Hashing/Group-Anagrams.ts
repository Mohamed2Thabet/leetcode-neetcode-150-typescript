class Solution {
  groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string,string[]>()

    for(let word of strs)
    {
        let key = word.split("").sort().join("")
        if(map.has(key))
            map.get(key)?.push(word)
        else
            map.set(key,[word])
    }
    return Array.from(map.values())
  }
}

const solution = new Solution();

console.log(
  solution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]),
); 
