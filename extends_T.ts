//extend可以理解为一种约束
//PS:顺便我们在这里再讲一下泛型

type name = "张三" | "李四" | "王五";
//条件类型
//extend可以说是约束，也可以说T是否满足这种后置聚合类型，如果满足选never，如果不满足返回T
//最终像函数一样输入类型变量返回
type NNable<T> = T extends null | undefined ? never : T; //如果满足extend的
let demo1: NNable<number>; // => number
let demo2: NNable<string>; // => string
let demo3: NNable<undefined | null>; // => never






