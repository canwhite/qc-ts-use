/*类型断言

as用于手动指定一个值的类型，主要有两种方法
方法一:
(val as string).length  //react中tsx必须这样写
方法二:
(<string>val).length 

对前端来说建议使用as，因为在tsx中只可以使用as

*/

//test1
function test1(val: string | number) :number {
    if ((val as string).length ) {
        return (val as string).length
    } else {
        return val.toString().length
    }
}

//test2
function test2(val: string | number) :number {
    if ((<string>val).length ) {
        return (<string>val).length
    } else {
        return val.toString().length
    }
}