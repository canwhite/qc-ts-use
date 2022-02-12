//record

/* -----------------------------------
//把any的key都拿到，然后用来约束K

type Record<K extends keyof any, T> = {
    [P in K]: T;
}; 
--------------------------------------*/
type petsGroup = 'dog' | 'cat' | 'fish';
interface IPetInfo {
    name:string,
    age:number,
}

//一个大的对象里边确定的key：value
type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo:IPets = {
    dog:{
        name:'dogName',
        age:2
    },
    cat:{
        name:'catName',
        age:3
    },
    fish:{
        name:'fishName',
        age:5
    }
}
console.log("animal",animalsInfo);




