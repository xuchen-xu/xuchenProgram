import Link from "next/link";
import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import React, { useState, useRef } from "react";
import "@/static/css/font-awesome.css";
import "../css/novel.css";
import fetch from "isomorphic-unfetch";
import Chuanzhi from "../components/chuanzhi";

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
      <div className="continer clear">
        <div className="title clear">
          <div className="dibubox">
            <div className="formbox">
              <div className="noveltext">小 说 分 类</div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------- */}
        <div className="classification">
          <div className="box-fenglei">
            <div className="two clear">
              <div className="special clear">小说</div>
              <div className="box clear">散文</div>
              <div className="box clear">随笔</div>
              <div className="box clear">文学</div>
            </div>
          </div>
        </div>
        <div className="photo clear">
          <img src="../../static/images/image/novelfirst.jpg" />
        </div>
        <div className="books clear">
          {props.show.map((item: any) => {
            imgnumber++;
            if (imgnumber < 22) {
              return (
                <div key={item.bookId} className="book clear">
                  <div style={{ alignContent: "center" }}>
                    <img
                      src={`../static/images/image/${item.imgPath}`}
                      width="115"
                      height="172"
                    />
                  </div>
                  <div className="text1">{item.bookName}</div>
                  <div className="text2">作者:{item.author}</div>
                </div>
              );
            }
          })}
        </div>
        {/* <Chuanzhi {...test}/> */}
      </div>
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
