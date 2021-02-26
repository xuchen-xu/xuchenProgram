import Link from "next/link";
import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import React, { useState, useRef } from "react";
import "@/static/css/font-awesome.css";
import "./novel.css";
import fetch from "isomorphic-unfetch";
import Topboxnav from "../components/topboxnav";
import { Pagination } from "antd";
// 声明的全局数据

const IndexPage = (props: any) => {
  return (
    <Layout title="分类：小说">
      <div className="novel-body">
        <Topboxnav></Topboxnav>
        {/* -----------第二层top导航栏开始--------------- */}
        <div id="db-nav-book" className="nav">
          <div className="nav-wrap" style={{ height: "75.677px" }}>
            <div className="nav-primary" style={{ height: "74px" }}>
              <div
                className="nav-logo"
                style={{ width: "145px", height: "56px", float: "left" }}
              >
                <a href="" style={{ fontSize: "30px", fontWeight: "bolder" }}>
                  图书分类
                </a>
              </div>
              <div className="nav-search">
                <form
                  action="https://search.douban.com/book/subject_search"
                  method="get"
                >
                  <fieldset>
                    <label htmlFor="inp-query"></label>
                    <div className="inp">
                      <input
                        id="inp-query"
                        name="search_text"
                        placeholder="书名、作者、ISBN"
                        value=""
                        readOnly
                      />
                    </div>
                    <div className="inp-btn">
                      <input type="submit" value="搜索" readOnly />
                    </div>
                    <input type="hidden" name="cat" value="1001" readOnly />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div className="nav-secondary">
            <div className="nav-items">
              <ul>
                <li>
                  <a href="https://book.douban.com/cart/">购书单</a>
                </li>
                <li>
                  <a target="_blank">电子图书</a>
                </li>
                <li>
                  <a>孔网书店</a>
                </li>
                <li>
                  <a target="_blank">2021年度榜单</a>
                </li>
                <li>
                  <a target="_blank">2021书影音报告</a>
                </li>
                <li className=" book-cart">
                  <a target="_blank">购物车</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* -----------第二层top导航栏结束--------------- */}
        {/* ---------------------主体部分------------------------ */}
        <div id="wrapper">
          <div id="content">
            <h1>孔网图书标签: 小说</h1>
            <div className="grid-16-8 clearfix">
              <div className="article">
                <div id="subject_list">
                  <div className="clearfix">
                    <span className="rr greyinput">
                      综合排序 &nbsp;/&nbsp;
                      <a>按出版日期排序</a>
                      &nbsp;/&nbsp;
                      <a>按评价排序</a>
                    </span>
                  </div>
                  <ul className="subject-list">
                    {props.show.map((item: any) => {
                      if (item.bookId < 3) {
                        return (
                          <li className="subject-item">
                            <div className="pic">
                              <a href="">
                                <img
                                  src={`../static/images/image/${item.imgPath}`}
                                  style={{ width: "90", height: "133" }}
                                />
                              </a>
                            </div>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
              <div className="aside"></div>
              <div className="extra"></div>
            </div>
          </div>
          <div id="footer">
            <Pagination
              total={85}
              showSizeChanger
              showQuickJumper
              showTotal={(total) => `Total ${total} items`}
            />
          </div>
        </div>
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
