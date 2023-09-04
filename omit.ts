/* 3.5 版本之后，TypeScript 在 lib.es5.d.ts 里添加了一个 ​Omit<T, K>​ 帮助类型。
​Omit<T, K>​ 类型让我们可以从另一个对象类型中剔除某些属性，并创建一个新的对象类型：
 */

type User = {
    id: string;
    name: string;    
    email: string;
};
//将一个type，通过Omit生成另外一个type
type UserWithoutEmail = Omit<User, "email">;

/* 
//这里会报错，因为没有emial类型
let user:User = {
    id :"123",
    name :"zack"
} 
*/

let user:UserWithoutEmail = {
    id:"123",
    name:"zack"
}

console.log("--user--",user);


