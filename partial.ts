//最近使用TypeScript写了一个项目,过程中不断感受到TypeScript的魅力,现在来分享几个业务中关于泛型的场景

type Person = {
    name: string;
    age: number;
}
/* 
Person类型中有两个成员属性,如果我们要把这个类型赋予变量tom,
那tom必须拥有name和age两个属性
 */

//现在我们要让Person的两个属性都变为可选,可以使用Partial类型进行转换

type PartialPerson = Partial<Person>;

let partialPerson: PartialPerson = {
  name: 'tom'
};