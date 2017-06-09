// 重排数组
// 两种用法：
//   1. 根据 indexes 给的索引，取 array
//   2. 根据 indexes 给的 key，取对象 value
export default function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
}
/*
 * d3.permute(["a", "b", "c"], [1, 2, 0]); // ["b", "c", "a"]
 * 
 * var object = {
 *     yield: 27, 
 *     variety: "Manchuria", 
 *     year: 1931, 
 *     site: "University Farm"
 * },  fields = ["site", "variety", "yield"];
 * d3.permute(object, fields);
 * // ["University Farm", "Manchuria", 27]
 */