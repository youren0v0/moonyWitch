import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import App from "pages/App";
import Error from "pages/Error";
import routers from "./routers";

const Routes: React.FC<any> = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/app" exact component={App} />
    {/* {
      routers.map((v) => {
        return <Route key={v.path} path={ v.path } exact = { v.exact } component = { v.component } />;
      })
    } */}

      {/* 路径不存在，则回到主页。 */ }
  <Route component={ Error } />
    </Switch>
  );
}
export default Routes