//前边func后是type的方式定义类型，
//后边是interface的形式定义类型
//前后类型需要一致
const func:(prop:number)=>Promise<number> = function(prop:number):Promise<number>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(prop+1)
        },2000)
    })
} 

func(3).then(res=>{
    console.log("--res--",res);
})