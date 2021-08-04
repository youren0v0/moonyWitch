// 给每个route都新建一个文件夹，把index.html拷贝进去
const routers = require("../src/utils/routers");
const fs = require("fs-extra");//添加本机文件的工具
const path = require("path"); //处理文件路径的工具
routers.forEach((v) => {
    const name = !v.url ? 'home': v.url
    fs.copySync(
        path.join("build", "index.html"),
        path.join("build", name, "index.html")
    );
    fs.copySync(
        path.join("build", "index.html"),
        path.join("build", "404.html")
    );
});
