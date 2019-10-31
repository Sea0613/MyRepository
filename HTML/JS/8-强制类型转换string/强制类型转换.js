// var a="123";
// console.log(typeof a);

// var a=1;
// b=2;
// c=a+b;
// console.log(c);


//  强制类型转换
//    -指的是将一个数据类型强制转换为其他的数据类型
//    -类型转换主要指，将其他的数据类型转换为：String Number Boolean 


//  将其他的数据类型转换为String
//    方式一：
//        调用被转换数据类型的toString()方法。
//        该方法不会影响到原变量，它会将转换的结果返回，
//        但是注意：null和undefined这两个值没有toString()方法,如果调用他们的方法会报错。
//        // var a = 123;

//        调用a的toString()方法
//        调用xxx的yyy()方法，意思就是xxx.yyy();

//        a = a.toString();

       b = true;
       b = b.toString();
       console.log(typeof b);
       console.log(b);

//        a = null;
//        a = a.toString();调用null的会报错

//        a = undefined;
//        a = a.toString();调用undefined的会报错

//    方式二：
//        调用String()函数，并将被转换的数据作为参数传递给函数。
//        使用String()函数做强调类型转换时，
//        对于Number和Boolean实际上就是调用的toString()方法，
//        但是对于null和undefined，就不会调用toString()方法，
//        它会将null直接转换为"null",undefined同样如此。

var a = 123;
a = String(a);

a = null;
a = String(a);

a = undefined;
a = String(a);

// a = true;
// a = String(a);

console.log(typeof a);
console.log(a);
