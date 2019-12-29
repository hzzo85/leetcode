// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

var noStrRepeat = function(str2) {
  // return str2 === [...new Set(str2)].join('');
  return str2 === [].filter.call(str2, (s, i, o) => o.indexOf(s) == i).join("");
};

// 暴力解法 O(n2)
var lengthOfLongestSubstring0 = function(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length - i; j++) {
      let str2 = s.slice(i, i + max + 1);
      if (noStrRepeat(str2) && str2.length > max) {
        max++;
      } else {
        break;
      }
    }
  }
  return max;
};

/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口法 O(n)
var lengthOfLongestSubstring1 = function(s) {
  let i = 0; // 步进一位的指针
  let flag = 0;
  let max = 0;
  // 边界处理
  if (s.length === 1) return 1;
  while (i <= s.length) {
    // res不含有重复字符
    let res = s.substring(flag, i);
    let len = i - flag;
    max = len > max ? len : max;
    if (res.indexOf(s[i]) > -1) {
      flag += res.indexOf(s[i]) + 1;
    }
    i++;
  }
  return max;
};

// console.log(lengthOfLongestSubstring1("bbbbb"));
// console.log(lengthOfLongestSubstring1("abcabcbb"));
// console.log(lengthOfLongestSubstring1("pwwkew"));
// console.log(lengthOfLongestSubstring1(" "));
console.log(lengthOfLongestSubstring1("au"));
