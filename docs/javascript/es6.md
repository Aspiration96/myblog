
# Es6

# 1.let 和 const 声明
## let
### 基础用法

```Javascript
let a = 2;
var b = 4;
function con(){
    let a = 1;
    var b = 3;
    console.log(a);
    console.log(b);
}

con(); //输出 1和3
console.log(a) //输出2
console.log(b) //输出4
```
从中可以看出<u>** let 只作用于块级作用域中**</u>， var 的就不过多解释了 es6 之后很少人用到 var 了 除非一些老项目。

### 暂时性死区
```Javascript
let tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”。


### 不允许重复声明
let 不允许在相同作用域内，重复声明同一个变量。


## const
### 基本用法
```Javascript
const PI = 3.1415;
PI       // 3.1415
PI = 3;  // TypeError: Assignment to constant variable.

const foo; //SyntaxError: Missing initializer in const declaration
```
上面代码表明改变常量的值会报错。只声明不赋值也会报错。
const 的作用域与 let 命令相同：只在声明所在的块级作用域内有效。
