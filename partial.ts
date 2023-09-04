//最近使用TypeScript写了一个项目,过程中不断感受到TypeScript的魅力,现在来分享几个业务中关于泛型的场景

// type Person = {
//     name: string;
//     age: number;
// }
/* 
Person类型中有两个成员属性,如果我们要把这个类型赋予变量tom,
那tom必须拥有name和age两个属性
 */

//Partial让内容可选
type PartialPerson = Partial<{
  name: string;
  age: number;
}>;

let partialPerson: PartialPerson = {
  name: 'tom'
};