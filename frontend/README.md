
使用 Gulp 进行简单的前端代码自动化构建

一、用途
--------------------------------------

1. 压缩前端静态文件（CSS、JavaScript）

2. 给文件添加版本戳

二、依赖关系
--------------------------------------


| 依赖模块      			| 模块用途       				| 
| ------------- 			|:-------------:				|
| del 		      			| 删除过期文件  				|
| gulp-rev 		  			| 生成文件版本戳并重命名|
| uglify 		    			| 压缩 JavaScript 代码  |
| gulp-plumber  			| 阻止异常中断构建		  |
| gulp-clean-css			| 压缩 CSS 文件				  |
| gulp-rev-collector	| 添加文件版本戳				|
| autoprefixer  			| 补充 CSS 文件前缀		  |

三、使用方式
--------------------------------------

安装 gulp 所需要的依赖

```
npm i
```

执行构建任务

```
gulp
```

四、构建
--------------------------------------

原来的前端代码文件夹

```
| --- webapp 			// 前端代码文件夹
```
构建完成后

```
| --- webapp 			// 前端代码文件夹
| --- webapp-dist       // 构建后的前端代码文件夹
| --- manifest	        // 静态文件版本戳关系
```

gulp 会将 webapp 下的所有非前端类型（*.css、*.js、*.html、*.jsp）的文件全部复制到 webapp-dist 文件目录下。同时对 *.css、*.js 文件进行压缩与 MD5 重命名，并将重命名前后的文件路径保存到 manifest 目录下的 *.json 文件。

```
// 原文件
"css/unicorn.css"

// 构建完成
"css/unicorn-d41d8cd98f.css"

// 生成版本戳文件到 manifest/ 下
{"css/unicorn.css": "css/unicorn-d41d8cd98f.css"}
```

之后 Gulp 会遍历 manifest 下的所有 json 文件与 webapp 目录下的所有 *.html、*.jsp 文件，替换这些页面所引入的静态文件路径。这些页面之后会被输出到 web-dist 下，完成整个缓存管理与文件压缩的构建

```
// before
<link rel="stylesheet" href="css/unicorn.css">

// after
<link rel="stylesheet" href="css/css/unicorn-d41d8cd98f.css">
```
