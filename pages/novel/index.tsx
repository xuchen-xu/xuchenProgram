import Link from "next/link";
import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import React, { useState, useRef } from "react";
import "@/static/css/font-awesome.css";
import "../css/novel.css";
import fetch from "isomorphic-unfetch";
import Chuanzhi from "../components/footerbook";

// 声明的全局数据
let imgnumber = 0;
let test = {
  key: "111",
};
const IndexPage = (props: any) => {
  //引用页面元素
  const inputRef = useRef<HTMLInputElement>(null);
  let [user, setuser] = useState("");
  const handleSubmit = () => {
    console.log(inputRef.current && inputRef.current.value);
    if (inputRef.current) {
      // setuser(inputRef.current.value)
    }
  };

  return (
    <Layout title="分类：小说">
      
    </Layout>
  );
};

// getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
// 当刷新页面(初次载入页面)，该方法会在服务器执行
// 当通过<Link>跳转路由的时候，该方法会在客户端执行
IndexPage.getInitialProps = async () => {
  const res = await fetch("http://localhost:3001/novel");
  const data = await res.json();
  //这边返回的数据会被挂载到组件的props中
  return { show: data };
};

export default withRouter(IndexPage);
