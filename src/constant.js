// 通过闭包函数构造一个常数
export default function(x) {
  return function() {
    return x;
  };
}
