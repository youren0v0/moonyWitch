
import pages from "./pages";
import routers from "../../static/json/router.json";
interface RouterProps {
  url: string;
  exact: boolean;
  componentName: string;
  component: any;
  path: string;
}

const rawPath = (path:any) => {
  return process.env.NODE_ENV === "development"
    ? "/" + path
    : process.env.PUBLIC_URL + "/" + path;
};

export default routers.map((v) => {
  let obj: RouterProps =  {
    ...v,
    path: rawPath(v.url),
    component: pages[v.componentName || 'home']
  };
  return obj
});
