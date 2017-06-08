import {pair} from "./pairs";

// 笛卡尔积
export default function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  // 默认 reduce 为:  (a,b) => [a, b]
  if (reduce == null) reduce = pair;

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      // reduce 决定两数组元素如何合并成一个元素
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
}
/*
 * d3.cross([1, 2], ["x", "y"]); 
 * 返回：[[1, "x"], [1, "y"], [2, "x"], [2, "y"]]
 */ 