//基本数据类型

//--基础的
let data : number = 123;
console.log("--data--",data)


//--稍微进阶的
type base = string | number;
let num:base = 123;
let str:base = "456";
console.log("--num--",num);
console.log("--str--",str);



//数组字典,注意string和number是小写
type obj = {
    name:string,
    age:number,
}
//obj
type arr = obj[];

let marr:arr = [
    {
        name:"张三",
        age:18
    }
]
console.log("marr",marr);


