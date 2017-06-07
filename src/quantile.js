import number from "./number";

// 取 p分位数，该方法要求 values 已经排序
export default function(values, p, valueof) {
  if (valueof == null) valueof = number; // 默认转换成数字: '1' -> 1
  if (!(n = values.length)) return;
  
  // p值边界检查
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);

  // 使用 https://en.wikipedia.org/wiki/Quantile  R-7 
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}
