import ascending from "./ascending";

// 使用 compare 比较，获取 values 中最小值的索引
export default function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  // 默认使用 ascending 作比较
  if (compare == null) compare = ascending;

  while (++i < n) {
    // 后面的 compare(xj, xj) 用来确定 a === b 时返回的是0
    // 比较函数中 a===b 且不返回 0 的情况通常不会出现。
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
}
