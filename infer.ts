//ts类型中的infer的使用 infer可以在extends的条件语句中推断待推断的类型
//目前在我来看，infer的应用场景比较少，这里写一个官方给的例子

//so:比较难理解我们就使用实例去理解
//eg1:
//如果约束成立，即T是一个函数，则返回函数的返回值，否则返回any
type ReturnT<T> = T extends (...args: any[]) => infer R ? R : any;
type func = () => number;
type variable = string;
type funcReturnType = ReturnT<func>; // funcReturnType 类型为 number，返回的函数的返回值在赋值之后才可以推断
type varReturnType = ReturnT<variable>; // varReturnType 类型为 string



//eg2: 比较常用的，用来解包,让我们可以定义和使用包内部的类型
type Ids = number[];
type Names = string[];
//--如果传进来的是 xxx[]这样的数组类型，
//就返回数组中单个元素的类型，如果不是xxx[],就返回传进来的类型就可以了
type UnP<T> = T extends (infer R)[] ? R:T; 

type idType = UnP<Ids>; // idType 类型为 number
type nameType = UnP<Names>; // nameType 类型为string



//在一个容器中包的类型不定的情况下，我们就可以用inferR和条件类型判断，返回容器中的类型，而不需要去引入
type Res = Promise<number[]>;
type Unpacked<T> = T extends Promise<infer R> ? R : T;
type resType = Unpacked<Res>; // resType 类型为number[]



//eg3:



/* ----------------------------------------------------
const reducer = (x: number) => x + 1;
const [state, dispatch] = useReducer(reducer, ''); 
-------------------------------------------------------*/
// --error
// Argument of type "" is not assignable to parameter of type 'number'.

//那么为什么会爆这个错误呢？
//或者说React这里是如何通过reducer函数的类型来判断state的类型呢？


/* function useReducer<R extends Reducer<any, any>, I>(
    reducer: R,
    // ReducerState 推断类型
    initializerArg: I & ReducerState<R>,
    initializer: (arg: I & ReducerState<R>) => ReducerState<R>
  ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
  

  // 第一个参数，是一个函数，参数是S，则返回值也是S
  type Reducer<S, A> = (prevState: S, action: A) => S; 
  

  // infer推断,通过把S拿出来，用来约束后边的初始化参数
  type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any>? S : never;
  
  */





