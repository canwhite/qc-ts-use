//extend可以理解为一种约束
//PS:顺便我们在这里再讲一下泛型

type name = "张三" | "李四" | "王五";
//设置一个可以动态给类型的泛型类型，这里更特殊加了三目运算符，可见在ts中，也是可以使用一些运算符号的
//这里的T相当于一个变量，根据传入的类型来确定它最终是什么的类型，有点类似于简单的函数使用，使得类型的使用更具有拓展性
type NNable<T> = T extends null | undefined ? never : T; 
let demo1: NNable<number>; // => number
let demo2: NNable<string>; // => string
let demo3: NNable<undefined | null>; // => never






