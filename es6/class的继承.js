//初体验
class Point {
    constructor() {
        console.log('cons')
    };
    abc = 2323;
    toStringer() {
        console.log('toStringer')
    }
}
class ColorPonint extends Point {
    toString() {
        super.toStringer()
    }
}
let ColorPonints = new ColorPonint()
ColorPonints.toString()



//只有调用super之后，才可以使用this关键字，否则会报错
class Pointer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ColorPointer extends Pointer {
    constructor(x, y, color) {
        super(x, y);
        this.color = color; // 正确
    }
}
let cp = new ColorPointer(25, 8, 'green');

console.log(cp instanceof ColorPointer) // true
console.log(cp instanceof Pointer) // true


//最后，父类的静态方法，也会被子类继承。
class A {
    static hello() {
      console.log('hello world');
    }
  }
  
  class B extends A {
  }
  
  B.hello()  // hello world
