
import Home from "../pages/Home";
import App from "../pages/App";

const rawPath = (path:any) => {
  return process.env.NODE_ENV === "development"
    ? path
    : process.env.PUBLIC_URL + path;
};
const routers = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/app",
    exact: true,
    component: App
  }
];
export default routers.map((v) => {
  return {
    ...v,
    path: rawPath(v.path)
  };
});
