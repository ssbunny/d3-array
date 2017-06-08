import ascending from "./ascending";

// 参考 https://stackoverflow.com/questions/26882631/d3-what-is-a-bisector
export default function(compare) {
  // compare.length 表示函数期望接收的参数个数，arguments.length 是实际接收个数
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        // 这里是 left 与 right 的区别
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

// compare 只有一个回调参数时，相当于使用 compare 传回的值，即类似 Array.map 的功能。
// 而此时实际使用的 compare 函数是 ascending
function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}
