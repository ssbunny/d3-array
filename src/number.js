// 强制转换成数字, null 转成 NaN
export default function(x) {
  return x === null ? NaN : +x;
}
