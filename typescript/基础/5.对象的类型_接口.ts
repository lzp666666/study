//在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

interface Person {
    neme: string;
    age: number;
}
let tom: Person = {
    neme: 'tom',
    age: 25
}




//定义的变量比接口少了一些属性是不允许的：
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom'
};




//多一些属性也是不允许的：
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
//可见，赋值的时候，变量的形状必须和接口的形状保持一致。






//有时我们希望不要完全匹配一个形状，那么可以用可选属性：
interface Person2 {
    name: string,
    age?: number
}

let bai: Person2 = {
    name: 'tom',
}



//有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tomm: Person3 = {
    name: 'Tom',
    gender: 'male',
};


//一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface Person4 {
    name: string;
    age?: number;
    [propName: string]: string;
}
//  一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
interface Person5 {
    name: string;
    age?: number;
    [propName: string]: string | number;
}


//有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
interface Person5 {
    name: string;
    readonly id: number;
}
let tom5: Person5 = {
    id: 89757,
    name: 'Tom',
};
tom.id = 9527;