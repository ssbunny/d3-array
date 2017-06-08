// 将毗邻的两个元素组合成一对，默认组合方式是 pair
export default function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
}

// 主要用在一些回调函数参数中，如求笛卡尔积时的默认 reduce 函数
export function pair(a, b) {
  return [a, b];
}
