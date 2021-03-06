import number from "./number";

// 求 平均数
export default function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
}
/**
 * console.log(d3.mean([1, 4, 5, 4]));     // 3.5
 * console.log(d3.mean(['1', '3', 'a']));  // 2
 */