# moonyWitch

主体使用ts + react + react-router  
css使用styled-components  
ui选用material  
接口使用leancloud-storage  
为应对github page 路由问题，使用fs-extra进行复制文件  
webpack配置方面：使用html-webpack-plugin生成html，webpack-dev-server、react-hot-loader进行热更新，file-loader进行图片打包  

# 部分问题记录
ts导入图片报错：手动引入images.d.ts配置文件
ts其他导入文件问题，记录在tsconfig文件内
使用webpack-dev-server时，webpack-cli需要降级
