// import Link from 'next/link'
import Layout from "../../components/Layout";
// import { withRouter } from "next/router";
import React from "react";
import "@/static/css/font-awesome.css";
import { watch } from "fs";
// import "./css/index.css";
// import fetch from "isomorphic-unfetch";
// import Fromdemo from "./components/from"
// 声明的全局数据

let IndexPage: React.FC = (props) => {
  return (
    <div id="db-global-nav" className="global-nav">
      <div className="bd">
        <div className="top-nav-info">
          <a className="nav-login" rel="nofollow">
            登录/注册
          </a>
        </div>

        <div className="top-nav-doubanapp">
          <a className="lnk-doubanapp">下载网站客户端</a>
        </div>

        <div className="global-nav-items">
          <ul>
            <li className="">
              <a target="_blank">孔网</a>
            </li>
            <li className="on">
              <a>读书</a>
            </li>
            <li className="">
              <a target="_blank">古籍</a>
            </li>
            <li className="">
              <a target="_blank">墨迹</a>
            </li>
            <li className="">
              <a target="_blank">珍本</a>
            </li>
            <li className="">
              <a target="_blank">小说</a>
            </li>
            <li className="">
              <a target="_blank">散文</a>
            </li>
            <li className="">
              <a target="_blank">随笔</a>
            </li>
            <li className="">
              <a target="_blank">文学</a>
            </li>
            <li className="">
              <a target="_blank">宗教</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// export default class Child extends React.Component{

//   render(){
//     return  <div>{this.props.params.msg}</div>
//   }
// }

//getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行
// IndexPage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3001/api/users");
//   const data = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   return { show: data };
// };

export default IndexPage;
