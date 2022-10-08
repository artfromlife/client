How to use ``optimization.splitChunks`` ?

避免打包未使用的模块
1. input  从入口开始寻找依赖模块, 构建依赖关系图
2. output 就是指定打包文件的位置和文件名称
3. webpack 只识别 .js 和 .json 文件， 其他文件都需要配置相应的 loader, 也就是模块加载器？
4. loader 将这些其他的文件转为 有效的模块 ， 构建出模块依赖图
5. plugin 用来扩展 webpack 的能力
6. 打包模式 mode ： development production none
7. resolve 用来设置模块该如何解析， alias配置别名， 简化模块导入路径， extensions 导入模块时可以不带后缀
8. optimization 用于生产环境提升性能
   minimize: 压缩代码
   minimizer: 压缩插件
   runtimeChunk: 将所有chunk之间共享的运行时文件拆分出来
   splitChunk: 拆分bundle

