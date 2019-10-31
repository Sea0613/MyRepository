// 在JS中所用的数值都是Number类型，
// 包括整数和浮点数（小数）
// JS中可以表示的数字的最大值为：Number.MAX_VALUE
// JS中可以表示的数字的大于 0 的最小值为：Number.MIN_VALUE
// 如果使用Number表示的数字超过了最大值，则会返回一个 Infinity 表示正无穷，-Infinity 表示负无穷
// 使用typeof检查Infinity也会返回Number
 
// NaN 是一个特殊的数字，表示Not A Number
//     使用typeof检查一个NuN也会返回number

// 

var a = 123;
var b = "123";
// a = 456;
// a = 456.234;
console.log(typeof b);

// 可以使用typrof来检查一个变量的类型
// 语法:typeof 变量
// 检查字符串时，会返回string
// 检查数值时，会返回number


console.log(b);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE * Number.MAX_VALUE);
a = Infinity;
a = "abc" * "def"
a = NaN;
console.log(a);
console.log(typeof a);


// 在JS中整数的运算基本可以保证精确
var c = 123 + 4566;
console.log(c);

// 如果使用JS进行小数的计算时，可能会得到一个不精确的结果，所以千万不要用JS进行对精度要求比较高的运算
var c = 0.1 + 0.2;
console.log(c);