// 合并数组中的元素，可以合并数组的数组
export default function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  // 为什么不用 Array.push 而是先遍历获取总容量呢？
  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
}
/* 
 * d3.merge([[1], [2, 3]]);   // [1, 2, 3]
 * 
 * 注意，并不合并这种情况：
 * d3.merge([ [1], [2, 3], [4], [[2,3], 3] ]);  // [1, 2, 3, 4, [2,3], 3]
 */