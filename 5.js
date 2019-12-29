// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

// 双指针
// 解题思路：从左右两侧收缩
var maxArea = function(height) {
  // 边界情况处理
  if (height.length < 2) return 0;
  let i = height.length - 1;
  let flag = 0;
  let max = 0;
  while (flag < i) {
    let ai = height[i];
    let af = height[flag];
    let area = (i - flag) * Math.min(ai, af);
    // 如果比最大面积还要大
    if (area > max) {
      max = area;
    }
    // 矮侧前进
    ai < af ? i-- : flag++;
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
