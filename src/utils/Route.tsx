import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import routers from "./routers";
const Routes: React.FC<any> = () => {
  return (
    <Switch>
    {
      routers.map((v) => {
        return <Route key={v.path} path={ v.path } exact = { v.exact } component = { v.component } />;
      })
    }

      {/* 路径不存在，则回到主页。 */ }
  <Route component={ Home } />
    </Switch>
  );
}
export default Routes