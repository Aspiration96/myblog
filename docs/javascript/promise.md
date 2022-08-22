# Promise
Promise是为了解决异步编程的问题
## Promise有两个特点

     1. 对象的状态不受外界影响，Promise对象代表一个异步操作，有三种状态：**pending**（进行中）、**fulfilled**（已成功）、和**rejected**（已失败）。
     2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
Promise的缺点就是无法取消Promise，一旦新建它就会立即执行，无法中途取消。如果不设置回调函数，Promise内部抛出错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段。

## 基本用法

```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

## 链式调用
```javascript
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```
以上链式调用时 promise 对象返回成功就执行.then()以及通过result参数拿到数据进行处理，如果对象返回失败就会执行.catch()报错信息通过error参数拿到，最后一个finally()是不管成功还是失败都会执行。

## Promise.all()

Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
`const p = Promise.all([p1, p2, p3]);`
Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。

p的状态由p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

## Promise.race()
Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
`const p = Promise.race([p1, p2, p3]);`
上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

Promise.race()方法的参数与Promise.all()方法一样，如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve()方法，将参数转为 Promise 实例，再进一步处理。

## Promise.allSettled()

Promise.allSettled()方法接受一个数组作为参数，数组的每个成员都是一个 Promise 对象，并返回一个新的 Promise 对象。只有等到参数数组的所有 Promise 对象都发生状态变更（不管是fulfilled还是rejected），返回的 Promise 对象才会发生状态变更。

```javascript
const promises = [
  fetch('/api-1'),
  fetch('/api-2'),
  fetch('/api-3'),
];

await Promise.allSettled(promises);
removeLoadingIndicator();
```
上面示例中，数组promises包含了三个请求，只有等到这三个请求都结束了（不管请求成功还是失败），removeLoadingIndicator()才会执行。


## Promise.any() 
ES2021 引入了Promise.any()方法。该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。

只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。

Promise.any()跟Promise.race()方法很像，只有一点不同，就是Promise.any()不会因为某个 Promise 变成rejected状态而结束，必须等到所有参数 Promise 变成rejected状态才会结束。
```javascript
const promises = [
  fetch('/endpoint-a').then(() => 'a'),
  fetch('/endpoint-b').then(() => 'b'),
  fetch('/endpoint-c').then(() => 'c'),
];

try {
  const first = await Promise.any(promises);
  console.log(first);
} catch (error) {
  console.log(error);
}
```
上面代码中，Promise.any()方法的参数数组包含三个 Promise 操作。其中只要有一个变成fulfilled，Promise.any()返回的 Promise 对象就变成fulfilled。如果所有三个操作都变成rejected，那么await命令就会抛出错误。

## Promise.resolve()
有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。

`const jsPromise = Promise.resolve($.ajax('/whatever.json'));`

## Promise.reject()
Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。
```javascript
Promise.reject('出错了')
.catch(e => {
  console.log(e === '出错了')
})
// true
```
上面代码中，Promise.reject()方法的参数是一个字符串，后面catch()方法的参数e就是这个字符串。