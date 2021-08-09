const service = require("leancloud-storage");

const APP_ID = "9OV7cwtal2L1HlNKdRXKAOuW-gzGzoHsz"; // 注意 此处的ID和KEY每个人每个库是不一样的
const APP_KEY = "iCr9BQeeDsix6utqygLlYr8G"; // 请复制你对应的代码
const serverURL = "https://9ov7cwta.lc-cn-n1-shared.com"; // 绑定的api域名
const myuser = "admin"; // 登录账号
const mypassword = "123456a"; // 账号密码
export const init = ()=> {
    service.init({
        appId: APP_ID,
        appKey: APP_KEY,
        serverURL
    });
}
export const login = async ()=> {
  let res = false
  await service.User.logIn(myuser, mypassword)
    .then((loginedUser:any) => {
      console.log(loginedUser);
      res = true
      // return loginedUser.save();
    })
    .catch( (error:any) => {
      // 异常处理
      console.error(error);
    });
    return res
}
export default service