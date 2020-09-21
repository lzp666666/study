//在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：

// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};
//一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
function sum(x: number, y: number): number {
    return x + y
}

//注意，输入多余的（或者少于要求的）参数，是不被允许的：
function summ(x: number, y: number): number {
    return x + y;
}
summ(1, 2, 3);

function summmm(x: number, y: number): number {
    return x + y;
}
summmm(1);



//如果要我们现在写一个对函数表达式（Function Expression）的定义，可能会写成这样：
let mySum = function (x: number, y: number): number {
    return x + y;
};
//这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，
//是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
//用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}



//可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let toms = buildName('Tom');



//参数默认值
//在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
function buildNames(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcats = buildName('Tom', 'Cat');
let tomss = buildName('Tom');



//剩余参数
//ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}


let a: any[] = [];
push(a, 1, 2, 3);
//事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
function pushh(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let aa: any[] = [];
pushh(aa, 1, 2, 3);



//重载
//重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
//比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。
//利用联合类型，我们可以这么实现：
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
//然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。
function reversee(x: number): number;
function reversee(x: string): string;
function reversee(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}