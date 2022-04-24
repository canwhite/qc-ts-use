//extend可以理解为一种约束
//PS:顺便我们在这里再讲一下泛型

//example-1

type name = "张三" | "李四" | "王五";
//条件类型
//extend可以说是约束，也可以说T是否满足这种后置聚合类型，如果满足选never，如果不满足返回T
//最终像函数一样输入类型变量返回
type NNable<T> = T extends null | undefined ? never : T; //如果满足extend的
let demo1: NNable<number>; // => number
let demo2: NNable<string>; // => string
let demo3: NNable<undefined | null>; // => never


//example-2 ，更形象
//传进来类型，作为内部的一个统一状态判断和使用
class MinHeap<T> {

    //生成number类型的集合
    list: T[] = [];

    //生成number类型的参数
    add(element: T): void {
        //...
    }
    //返回值是number
    min(): T {
        return this.list.length ? this.list[0] : null
    }

}
let heap = new MinHeap<number>();
heap.add(3);
heap.add(5);
console.log(heap.min())







