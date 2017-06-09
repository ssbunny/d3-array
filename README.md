# d3源码学习笔记之 d3-array

记录学习 d3.v4.js 过程中，在源码中的注释。列出已经看过的源码:

* [x] array.js - 内部使用，提供 slice 、map 等 Array 常用方法
* [x] ascending.js - 数字的升序排序算法
* [x] bisect.js - 二分函数，左、右两种
* [x] bisector.js - 自定义二分函数，重置比较器
* [x] constant.js - 通过闭包函数构造常数
* [x] cross.js - 笛卡尔积
* [x] descending.js - 数字的降序排序算法
* [x] deviation.js - 均方差
* [x] extent.js - 同时取最小值、最大值
* [ ] histogram.js
* [x] identity.js - 内部使用，恒等函数
* [x] max.js - 最大值
* [x] mean.js - 平均数
* [x] median.js - 中位数
* [x] merge.js - 合并数组元素
* [x] min.js - 最小值
* [x] number.js - 强制转换成数字格式
* [x] pairs.js - 毗邻的两个元素组合成一对
* [x] permute.js - 重排数组
* [x] quantile.js - p分位数
* [x] range.js - 等差级数
* [x] scan.js - 通过 comparator 函数，线性遍历得到最小值的索引
* [x] shuffle.js - 使用洗牌算法将数组随机排序
* [x] sum.js - 求合
* [ ] ticks.js - 计算滴答数(TODO: 算法没看懂)
* [x] transpose.js - 转置矩阵
* [x] variance.js - 样本方差
* [x] zip.js - 转置矩阵(参数为矩阵行，参见 transpose.js)
* [ ] threshold/freedmanDiaconis.js
* [ ] threshold/scott.js
* [ ] threshold/sturges.js