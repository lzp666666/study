//如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
//1.什么是类型推论
//以下代码虽然没有指定类型，但是会在编译的时候报错：
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

//等价于
let myFavoriteNumberr: string = 'seven';
myFavoriteNumberr = 7;