// 数字的降序排序算法，类同 ascending
export default function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
