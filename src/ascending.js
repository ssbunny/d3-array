// 数字的升序排序算法，Array.sort() 默认是字母表排序
export default function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
