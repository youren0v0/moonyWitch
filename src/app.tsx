import React, { useEffect, useState } from "react";
import { hot } from 'react-hot-loader/root';
import Routes from "utils/Route";
import service,{init,login} from "utils/service";
import GlobalStyle  from 'utils/GlobalStyle';
export interface Props { }


const App: React.FC<any> =() => {
    const [isLogin, setLogin] = useState(false)
    useEffect(()=>{
        toLogin()
    },[])

    async function toLogin() {
        init()
       const res = await login()
       console.log(res,'----res')
       setLogin(res)
      }
      

    return  <>
    {/* {isLogin}
    {isLogin && <Routes/>} */}
    <Routes/>
    <GlobalStyle/>
    </>

}
export default hot(App);
