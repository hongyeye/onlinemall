import { request } from "./request";

/* 
在这里又做一次封装的意义是：
  首页以后有别的请求可以都写在这里
  可以减少HOME组件的冗余
  方便修改请求地址
  方便项目后期维护
*/
export function getHomeMultidata() {
  return request({
    url: "home/multidata",
  });
}
