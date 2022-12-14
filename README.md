# mota-vite 使用说明

图文说明：https://h5mota.com/bbs/thread/?tid=940&p=1

## 功能介绍

1. 极细粒度的热重载，使用它开发，你可以省去 95% 以上的刷新操作
2. 支持 vue ts antdv 等插件，使开发更为便捷迅速，写插件和 ui 更加方便
3. 基于 pnpm，可以自己安装想要的依赖包

### 热重载

1. 当 libs/ main.js index.html 中的任意一个文件被更改后，会自动刷新塔的页面
2. 修改楼层文件后自动在塔的页面上显示出来，不需要刷新
3. 修改脚本编辑或插件编写后也能自动更新更改的插件或脚本，但不保证不会出问题（一般都不会有问题的
4. 修改图块属性、怪物属性等后会自动更新
5. 当全塔属性被修改时，会自动刷新塔的页面
6. 样板的 styles.css 被修改后也可以直接显示，不需要刷新
7. 当 ts 文件和 vue 文件修改时，会自动更新对应的组件
8. 其余内容修改后不会自动更新也不会刷新页面

## 使用说明

### 进入开发环境

1. 首先需要安装 node.js，图文教程见 https://h5mota.com/bbs/thread/?tid=921&p=1
2. 右键 windows 图标，选择打开终端或打开 powershell，运行 `npm i -g pnpm`，等待安装完成
3. 用 vscode 打开项目文件夹，修改 mota.config.ts 中的塔 name，并保证与全塔属性中的相同，否则上传到网站之后可能无法进行游玩
4. 使用 ctrl+j 快捷键打开 vscode 底栏，并选择终端选项（Terminal），运行 pnpm i，安装依赖包，依赖包较多，安装时长可能较长
5. 在系统资源管理器中（不是 vscode！）打开 public 文件夹，按下 shift + 鼠标右键（win11 只按右键即可），选择在终端打开或在 powershell 打开
6. 在刚刚打开的终端中执行`node server.cjs`，运行样板的启动服务，可以提供样板相关的热重载服务
7. 回到 vscode，在终端中执行`pnpm dev`，运行 vite 启动服务，可以提供 ts 的按需编译等功能
8. 打开 vite 提供的网址，即可进入游戏界面，打开样板启动服务提供的编辑器网址，即可进入编辑器界面
9. 想要退出时，可以按下 ctrl+c 终止服务或直接退出 vscode 或终端

### 构建 & 发布

1. 开发完成后，你可以执行`pnpm build`进行构建，结果会生成在 dist 文件夹下，对其进行压缩成 zip 后即可发布和更新
2. 构建完成后，你还可以执行`pnpm preview`来预览网站上的效果或使用`pnpm preview-node`在热重载条件下预览网站上的效果

### 开发

1. 对于 vue，它会在 body 的一个子标签（id="root"）上构建 vue app
2. 对于 ts，所有在 src 文件夹内的 ts 都会被编译，但会根据引入情况，只将使用到的文件构建
3. 建议安装 vscode 插件 volar，它提供了 vue 文件的语法高亮与 ts 支持

### 插件

1. 该样板提供了 ts 插件的解决方案，你可以在 plugin 文件夹下创建你的插件（样板内置了一个弹出显示文字的插件）
2. 插件创建后，必须有一个默认导出，且必须是一个函数，表示进行插件的初始初始化，同时必须有返回值，返回所有在外部会用到的变量与函数，其中所有的变量与函数都会转发到`core.plugin`上，所有不以下划线开头的函数都会转发到`core`上，例如样板内置的弹出显示的插件可以直接在外部使用`core.addPop()`来调用，注意所有的转发会在游戏加载完成后进行！
3. 插件中与样板相关的初始化应当全部在默认导出的函数中进行，不可在函数外部进行，否则会报错！
4. 插件编写完成后，需要在`src/types/plugin.d.ts`中进行类型标注，把所有在外部可见的函数与变量标注在接口`PluginDeclaration`中
5. 之后在`src/initPlugin.ts`中按照示例初始化插件即可
6. 之后便可以在各个地方使用插件中的函数了！

## 注意事项

1. 所有 ts 与 vue 文件中的代码在录像验证时都不会运行，请勿在里面进行直接的与分数相关的操作
2. 如果其中有与其相关的操作，应当为用户操作后的回调函数，并在样板的插件中注册相应录像操作，才能使录像验证正常运行

## 一键更新

1. 在 script/update.ts 中修改你的用户 id 和密码
2. 先执行 pnpm build，再执行 pnpm update 即可自动发自助更新，之后通知管理员审核即可

## 接档说明

1. 把 public 文件夹下除 server.cjs 外的文件复制到新样板，或者将不是用 vite 样板造的塔全部复制到 public 文件夹
2. 命令行运行 pnpm i 和 pnpm declare 即可
