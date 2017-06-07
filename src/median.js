import ascending from "./ascending";
import number from "./number";
import quantile from "./quantile";

// 求 中位数
export default function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }
  // 上面的代码处理 NaN 并做转换，核心代码只是下面一句：
  // 排序 -> 求2分位数 -> 中位数
  return quantile(numbers.sort(ascending), 0.5);
}
