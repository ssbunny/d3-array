// 获得等差级数
export default function(start, stop, step) {
  // 只写一个参数时代表 stop:  start 默认 0, step 默认 1
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      // 保证数列中最后一项小于 stop 的值，只是
      // 为什么要“或0”，Math.ceil 后 Math.max 还不足以是整数吗？
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    // step 为公差。但是可能出现精度问题（IEEE 754），如 0.2 * 3 = 0.6000000000000001
    range[i] = start + i * step;
  }

  return range;
}
// TIP: 这个方法取索引很方便 d3.range(5) --> [0, 1, 2, 3, 4]