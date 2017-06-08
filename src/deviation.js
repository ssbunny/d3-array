import variance from "./variance";

// 均方差（标准差）
export default function(array, f) {
  var v = variance(array, f);
  // 方差的算术平方根
  return v ? Math.sqrt(v) : v;
}
