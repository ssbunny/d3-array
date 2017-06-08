import ascending from "./ascending";
import bisector from "./bisector";

// 对应 API :
// d3.bisect(array, x[, lo[, hi]])
// d3.bisectLeft(array, x[, lo[, hi]])
// d3.bisectRight(array, x[, lo[, hi]])

// 该方法假定数组已排序
var ascendingBisect = bisector(ascending);
export var bisectRight = ascendingBisect.right;
export var bisectLeft = ascendingBisect.left;

// API 中， d3.bisect === d3.bisectRight
export default bisectRight;

// 区分左右便于使用 Array.splice 对数组进行切分