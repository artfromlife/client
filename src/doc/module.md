```angular2html
使用 webpack 打包应用程序
你可以使用 ESM , CJS , AMD 
尽量使用一致的模块语法
```

```angular2html
webpack 推荐使用 ESM
```

```angular2html
ESM import 是静态导入模块， 关键词 静态 ！
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import

导入的模块都运行在严格模式下
在浏览器中，import 语句只能在声明了 type="module" 的 script 的标签中使用
import()，它不需要依赖 type="module" 的 script 标签 （类似函数）
按需加载模块的时候，动态 import() 是非常有用的
静态型的 import 是初始化加载依赖项的最优选择
静态 import 更容易从代码静态分析工具和 tree shaking 中受益
```

```angular2html
请不要滥用动态导入（只有在必要情况下采用）。静态框架能更好的初始化依赖，而且更有利于静态分析工具和 tree shaking 发挥作用。
```
```angular2html
关键字 import 可以像调用函数一样来动态的导入模块。以这种方式调用，将返回一个 promise
```

```javascript
异步组件原理
动态的加载模块。调用 import 的之处，被视为分割点，意思是，被请求的模块和它引用的所有子模块，会分割到一个单独的 chunk 中。
import('/modules/my-module.js')
  .then((module) => {
    // Do something with the module.
  });

let module = await import('/modules/my-module.js');
```

```javascript
webpack中你也可以使用import来导入dataURI 
什么是dataURI, 数据直接以编码的方式放在了URI里面了
import 'data:text/javascript;charset=utf-8;base64,Y29uc29sZS5sb2coJ2lubGluZSAxJyk7';
import {
    number,
    fn,
} from 'data:text/javascript;charset=utf-8;base64,ZXhwb3J0IGNvbnN0IG51bWJlciA9IDQyOwpleHBvcnQgY29uc3QgZm4gPSAoKSA9PiAiSGVsbG8gd29ybGQiOw==';
```