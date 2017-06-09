import min from "./min";

// 转置矩阵
export default function(matrix) {
  // matrix 无参时返回[]。 如 d3.zip() --> []
  if (!(n = matrix.length)) return [];
  // m 为最终转置矩阵的行数，取原矩阵最小的行
  for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
}

// 取数组长度进行 min
function length(d) {
  return d.length;
}
/*
 * |  1  2  3  |       |  1  4  6  |
 * |  4  5     |  ==>  |  2  5  7  |
 * |  6  7  8  | 
 */