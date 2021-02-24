// import Link from 'next/link'
import Layout from "../components/Layout";
import { withRouter } from "next/router";
import React from "react";
import "@/static/css/font-awesome.css";
import "./css/index.css";
import fetch from "isomorphic-unfetch";
import Fromdemo from "./components/from"
// 声明的全局数据

const IndexPage = (props: any) => {

  // console.log(props);
  return (
    <Layout title="随笔界面">
    <div>随笔页面</div>
    </Layout>
  );
};

//getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行
// IndexPage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3001/api/users");
//   const data = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   return { show: data };
// };

export default withRouter(IndexPage);
