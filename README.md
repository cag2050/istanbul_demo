# istanbul_demo
代码覆盖率工具

1.运行命令：istanbul cover simple.js  
2.运行命令：istanbul cover _mocha test/test.sqrt.js，需要全局安装istanbul和mocha，比如：npm install xxx -g。  
mocha 和 _mocha 是两个不同的命令，前者会新建一个进程执行测试，而后者是在当前进程（即 istanbul 所在的进程）执行测试，只有这样， istanbul 才会捕捉到覆盖率数据。其他测试框架也是如此，必须在同一个进程执行测试。
