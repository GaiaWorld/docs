# 启动引导流程

- 启动cli分析处理启动参数
- 注册自动生成代码
- 注册手动生成代码
- 注册pi_serv_lib需要的各种运行时
- 运行子命令Script、WebServer、Test
- 执行 script
    - 创建1个非快照虚拟机用于运行脚本
    - 创建pid并注入基础环境
        - 创建默认context上下文(插件代码加载)
            - 插件代码(pi_js_builtin),由pi_serv_builtin引用
            - 主要插件:
                - node modules
                - path
                - fs
                - 其他node已集成的基础模块
        - 设置启动参数： process.argv
        - 设置pi_env用于标识在pijs环境：process.env.PI_ENV
        - 设置promise监听器：globalThis.process.addPromiseHooks()
    - 加载启动脚本：
        - Ts文件：调用typescript.js,把ts转成js文件
        - js文件：使用nodeModules._compile加载并执行脚本



## 项目加载

-   ``` JavaScript
    const { run } = require("pi_pt/init_pijs");

    // 多版本方式启动
    // run("../dst_server_publish/0", "../dst_server_publish/0/pi_pt/init.js");

    // 单版本方式启动
    run("../dst_server", "../dst_server/pi_pt/init.js");
    ```
- 使用pi_pt的模块系统加载依赖代码
- 设置必要的环境变量，如：WORK_VM_COUNT、EXT_VM_COUNT、PROJECT、PROJECT_ROOT
- 调用pi_serv_lib的init_project方法加载新版本
- 启动项目代码
    - 启动数据库(全局只启动一次)
    - 使用pi_pt/init.js创建快照
        - 快照包括pi_pt及其依赖的模块，以及项目server/index.js中依赖的模块
    - 创建worker虚拟机及管理pid
    - 创建ext_worker虚拟机
    - 设置灰度版本
    - 初始化(pi_pt/init/init.js)
        - 配置
        - 数据表
        - 数据库监听器
        - 配置写入数据库(event事件配置)
        - 发送SharedArrayBuffer到所有的管理pid
        - 初始化网络配置
        - 清理配置缓存
        - 执行定时服务
        - 执行mfa
    - 创建listener pid(mqtt、http)
    - 启动网络监听