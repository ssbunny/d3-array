import transpose from "./transpose";

// 转置矩阵（参数为矩阵行）
export default function() {
  return transpose(arguments);
}
/*
 * 返回最短的数组长度：
 * d3.zip([1, 2], [3, 4]);             // [[1, 3], [2, 4]]
 * d3.zip([1, 2], [3, 4], [5]);        // [[1, 3, 5]]
 * d3.zip([1, 2], [3, 4], [5, 6, 7]);  // [[1, 3, 5], [2, 4, 6]]
 */