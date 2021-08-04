const service = require("leancloud-storage");

const APP_ID = "9OV7cwtal2L1HlNKdRXKAOuW-gzGzoHsz"; // 注意 此处的ID和KEY每个人每个库是不一样的
const APP_KEY = "iCr9BQeeDsix6utqygLlYr8G"; // 请复制你对应的代码
const serverURL = "https://9ov7cwta.lc-cn-n1-shared.com"; // 绑定的api域名
service.init({
  appId: APP_ID,
  appKey: APP_KEY,
  serverURL
});

export default service