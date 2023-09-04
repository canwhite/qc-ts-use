//前边是type后边是interface
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