// import Link from 'next/link'
import Layout from "../components/Layout";
import { withRouter } from "next/router";
import React from "react";
import "@/static/css/font-awesome.css";
import "./css/index.css";
import fetch from "isomorphic-unfetch";
// import Fromdemo from "./components/from"


const IndexPage = (props: any) => {

  // console.log(props);
  return (
    <Layout title="登录页">
    <div className="container clear">
    <div className="tbl">
        <div></div>
    </div>
    <div className="ph clear">
        {/* <%--显示手机图--%> */}
        {/* <div className="o"></div> */}
    </div>
    <div className="m clear">
        <div>密码登录</div>
        <div>
            <form className="loginBox" action="/home" method="post" >
                <input type="text" name="userName" placeholder="请输入用户名" /><br></br>
                <input type="password" name="password" placeholder="请输入密码" /><br></br>
                <input type="submit" value="登录豆瓣读书" />
            </form>
             {/* <Fromdemo></Fromdemo> */}
            {/* <div></div> */}
        </div>
        {/* <%--二维码标识--%> */}
        <div></div>
        <div className="tx clear">---换一种登录方式---</div>
        <div className="wx"></div>
        <div className="xl clear"></div>
    </div>
    <div className="sew">
        <div></div>
        <div>登录孔子旧书APP</div>
    </div>
</div>
    </Layout>
  );
};

//getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行
IndexPage.getInitialProps = async () => {
  const res = await fetch("http://localhost:3001/users");
  const data = await res.json();
  //这边返回的数据会被挂载到组件的props中
  return { show: data };
};

export default withRouter(IndexPage);
