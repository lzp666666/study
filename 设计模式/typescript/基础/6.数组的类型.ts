//在 TypeScript 中，数组类型有多种定义方式，比较灵活。
let nums: number[] = [1, 23, 23, 23]

let fibonacci: number[] = [1, '1', 2, 3, 5];//数组的项中不允许出现其他的类型：

let fibonacciii: number[] = [1, 1, 2, 3, 5];
fibonacciii.push('8')
//上例中，push 方法只允许传入 number 类型的参数，但是却传了一个 "8" 类型的参数，所以报错了
fibonacciii.push(8)



//我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：
let fibnacci: Array<number> = [1, 23, 23,]



//接口也可以用来描述数组：
interface numberArray {
    [index: number]: number
}
let fibb: numberArray = [1, 23, 23, 23]



//类数组（Array-like Object）不是数组类型，比如 arguments：
function sum() {
    let args: number[] = arguments;
}
//上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
function summ() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
function summm() {
    let args: IArguments = arguments;
}




//any 在数组中的应用
//  一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ['2323', 223, { sd: 2323 }]
