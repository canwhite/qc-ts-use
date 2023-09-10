# qc-ts-use
ts的基础使用和一些帮助类型

## init

tsc --init  
* 运行完会出现tsconfig.json，可以对ts转译为js过程进行配置干预  
* ts只有esm的概念，对于前端，所有less和css文件要在typing里declare import，
    放入tsconfig的inlude才起作用  

## use

```
npm i ts-node -g
ts-node xxx.ts
```

## include

* as
* base use
* function
* record
* partial （部分的）
* omit（忽略）
* extends
* infer


## main
```

--------------------------1. Partial------------------------------
type Partial<T> = {
    [P in keyof T]?: T[P];
};

//use
interface IPerson {
  name: string;
  age: number;
  height: number;
}

const person: Partial<IPerson> = {
  name: "zhangsan";
}


--------------------------2. Required-----------------------------

type Required<T> = {
    [P in keyof T]-?: T[P];  //减去问号
};

//use
interface IPerson {
  name?: string;
  age?: number;
  height?: number;
}

const person: Required<IPerson> = {
  name: "zhangsan";
  age: 18;
  height: 180;
}


----------------------------3.Readonly-----------------------------
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

//use
interface IPerson {
  name: string;
  age: number;
}

const person: Readonly<IPerson> = {
  name: "zhangsan",
  age: 18
}

person.age = 20; 


-----------------------------4.Pick<T, K extends keyof T>------------

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

//use
interface IPerson {
  name: string;
  age: number;
  height: number;
}

const person: Pick<IPerson, "name" | "age"> = {
  name: "zhangsan",
  age: 18
}

---------------------------5.Record<K extends keyof any, T>------------


type Record<K extends keyof any, T> = {
    [P in K]: T;
};

//use
interface IPageinfo {
    title: string;
}

type IPage = 'home' | 'about' | 'contact';

const page: Record<IPage, IPageinfo> = {
    about: {title: 'about'},
    contact: {title: 'contact'},
    home: {title: 'home'},
}


---------------------------6.Exclude<T, U>-----------------------------

type Exclude<T, U> = T extends U ? never : T;

//use
interface IPerson {
  name: string;
  age: number;
  height: number;
}

const person: Exclude<IPerson, "age" | "sex"> = {
  name: "zhangsan";
  height: 180;
}

---------------------------7.Omit<T, K extends keyof any>--------------
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

//use
interface IPerson {
  name: string;
  age: number;
  height: number;
}

const person: Omit<IPerson, "age" | "height"> = {
  name: "zhangsan";
}

---------------------------8.ReturnType--------------------------------

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

//use
function foo(type): boolean {
  return type === 0
}

type FooType = ReturnType<typeof foo>


```















