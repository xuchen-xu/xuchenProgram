// import Link from 'next/link'
import Layout from "../../components/Layout";
// import { withRouter } from "next/router";
import React from "react";
import "@/static/css/font-awesome.css";
import "../css/essay.css";
import cssobj from "../css/essay.less";
import fetch from "isomorphic-unfetch";
import { Carousel } from "antd";

// 声明的全局数据

type state = {
  selected: boolean;
};

type IProps = {
  show: [{}];
};
var imgnumber: number = 0;

export default class IndexPage extends React.Component<IProps, state> {
  static async getInitialProps() {
    const res = await fetch("http://localhost:3001/home");
    const data = await res.json();
    // console.log(data);
    //这边返回的数据会被挂载到组件的props中
    return { show: data };
  }

  constructor(props: any) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    return (
      <Layout title="首页">
        <header>
          <div className={cssobj.eheader}>
            <div className={cssobj.ehcenter}>
              <div className={cssobj.sloganBox}>
                <span className={cssobj.text}>网罗天下图书</span>
                <span>传承中华文化</span>
              </div>
              <div className={cssobj.userinfoBox}>
                <div className={cssobj.itemInfo}>
                  <span id="nickName" className={cssobj.infoNormal}>
                    <span className={cssobj.infoText}>登录</span>
                    <span className={cssobj.infoText}>/</span>
                    <span className={cssobj.infoText}>注册</span>
                  </span>
                </div>
                <div className={cssobj.itemInfo}>
                  <a className={cssobj.infoLink}>
                    <span className={cssobj.infoText}>消息</span>
                  </a>
                </div>

                <div className={cssobj.itemInfo}>
                  <a className={cssobj.infoLink}>
                    <span className={cssobj.infoText}>购物车</span>
                  </a>
                </div>

                <div className={cssobj.itemInfo}>
                  <a className={cssobj.infoLink}>
                    <span className={cssobj.infoText}>我的订单</span>
                  </a>
                </div>

                <div className={cssobj.itemInfo}>
                  <a className={cssobj.infoLink}>
                    <span className={cssobj.infoText}>个人中心</span>
                  </a>
                </div>

                <div className={cssobj.itemInfo}>
                  <a className={cssobj.infoLink}>
                    <span className={cssobj.infoText}>卖家中心</span>
                  </a>
                </div>

                <div className={cssobj.itemInfo}>
                  <a className={cssobj.infoLink}>
                    <span className={cssobj.infoText}>客服</span>
                  </a>
                </div>

                <div className={cssobj.itemInfo}>
                  <span className={cssobj.infoNormal2}>
                    <a className={cssobj.infoLink}>
                      <span className={cssobj.infoText}>手机版</span>
                    </a>
                  </span>
                  <span className={cssobj.lineTest}>|</span>
                </div>

                <div className={cssobj.itemInfo}>
                  <span className={cssobj.infoNormal3}>
                    <a className={cssobj.infoLink}>
                      <span className={cssobj.infoText}>送至 北京</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------------- */}
          <div className={cssobj.headersearchBox}>
            <div className={cssobj.headerSearch}>
              <a
                className={cssobj.logoText}
                style={{ fontFamily: "华文楷体", fontWeight: "bolder" }}
              >
                孔子旧书网
              </a>
              <div className={cssobj.searchBox}>
                <form className={cssobj.searchCon}>
                  <div className={cssobj.searchType}>
                    <div className={cssobj.itemType}>商品</div>
                    <div className={cssobj.itemType}>拍卖区</div>
                    <div className={cssobj.indicator}></div>
                  </div>
                  <div className={cssobj.searchinputBox}>
                    <div className={cssobj.searchstatusBox}>
                      <div className={cssobj.curStatus}>在售</div>
                      <span className={cssobj.icontabDown}></span>
                      <span className={cssobj.icontabUp}></span>
                    </div>
                    <input
                      type="text"
                      name="searchWord"
                      value=""
                      className={cssobj.inputLabel}
                      readOnly
                    />
                    <label
                      className={cssobj.searchLabel}
                      htmlFor="searchInput"
                      style={{ display: "block" }}
                    >
                      商品名称、作者、出版社、ISBN
                    </label>
                  </div>
                  <div id="searchBtn" className={cssobj.btn}>
                    搜索
                  </div>
                </form>
                <div className={cssobj.searchLink}>
                  <a className={cssobj.advsearchBtn} rel="nofollow">
                    高级搜索
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------- */}
        </header>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <body>
          <div className={cssobj.head} style={{ backgroundColor: "white" }}>
            <div className={cssobj.nav_box}>
              <ul className={["pullLeft", "leftpart"].join(" ")}>
                <li style={{ paddingLeft: "4px" }}>
                  <a className="PC">
                    <div>首页</div>
                    <span className="header_line"></span>
                  </a>
                </li>

                <li style={{ paddingLeft: "4px" }}>
                  <a className="PC">
                    <div>新书资讯</div>
                    <span className="header_line"></span>
                  </a>
                </li>

                <li style={{ paddingLeft: "4px" }}>
                  <a className="PC">
                    <div>小说</div>
                    <span className="header_line"></span>
                  </a>
                </li>

                <li style={{ paddingLeft: "4px" }}>
                  <a className="PC">
                    <div>散文</div>
                    <span className="header_line"></span>
                  </a>
                </li>

                <li style={{ paddingLeft: "4px" }}>
                  <a className="PC">
                    <div>随笔</div>
                    <span className="header_line"></span>
                  </a>
                </li>

                <li style={{ paddingLeft: "4px" }}>
                  <a className="PC">
                    <div>文学</div>
                    <span className="header_line"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------- */}
          <div className="bottomColor">
            <div className="lunbobox">
              <Carousel autoplay className="lunbo">
                <div>
                  {/* <h3 className="contentStyle">1</h3> */}
                  <img
                    src="../../static/lunbo/lun0.jpg"
                    width="1000"
                    height="270"
                  />
                </div>
                <div>
                  <img
                    src="../../static/images/lun.jpg"
                    width="1000"
                    height="270"
                  />
                </div>
                <div>
                  <img
                    src="../../static/lunbo/lun2.jpg"
                    width="1000"
                    height="270"
                  />
                </div>
                <div>
                  <img
                    src="../../static/lunbo/lun3.jpg"
                    width="1000"
                    height="270"
                  />
                </div>
                <div>
                  <img
                    src="../../static/lunbo/lun4.jpg"
                    width="1000"
                    height="270"
                  />
                </div>
              </Carousel>
            </div>
            {/* ------------------------导航栏部分结束------------------------------------------------------------------------------------ */}
            <div className="store-box">
              <div className="bodycenter">
                <div className="table-right">
                  <div className="content-right">
                    <div className="clearfix">
                      <div className="m_b50">
                        <div className="booklist_tit">
                          <h3 className="pull-left">特色推荐</h3>
                          <div className="pull-right more_list">
                            <a href="" className="now">
                              线装古籍
                            </a>
                            <a href="" className="now">
                              国学古籍
                            </a>
                            <a href="" className="now">
                              民国旧书
                            </a>
                            <a href="" className="now">
                              名人墨迹
                            </a>
                            <a href="" className="now">
                              艺术珍本
                            </a>
                            <a href="" className="now">
                              史学典籍
                            </a>
                          </div>
                          {/* -----书籍展示区域-------- */}
                          <div className="book_list m_t25">
                            <div className="booklist_box booklist_item1">
                              {/* {this.props.show} */}
                              <ul>
                                {this.props.show.map((item: any) => {
                                  if (item.id < 11) {
                                    return (
                                      <li
                                        className="litesthome"
                                        style={{ marginRight: "28px" }}
                                        key={item.id}
                                      >
                                        <div className="pic">
                                          <a
                                            href="http://book.kongfz.com/117287/2396615125/"
                                            target="_blank"
                                          >
                                            <img src={item.imgSrc} />
                                          </a>
                                        </div>
                                        <div className="book_name">
                                          <a
                                            href="http://book.kongfz.com/244804/2544650564/"
                                            target="_blank"
                                            // title="曝书亭集"
                                          >
                                            {item.itemName}
                                          </a>
                                        </div>
                                        <div className="shop_name">
                                          <a
                                            href="http://shop.kongfz.com/244804/"
                                            target="_blank"
                                            // title="瑾秀阁"
                                          >
                                            {item.producter}
                                          </a>
                                        </div>
                                        <div className="bookjuti_price">
                                          <span>￥</span>
                                          {item.price}
                                        </div>
                                      </li>
                                    );
                                  }
                                })}
                              </ul>
                              <div className="look_more">
                                <a
                                  href="http://book.kongfz.com/Cxianzhuang/"
                                  target="_blank"
                                  className="pull-right"
                                >
                                  ........................更多
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* -----------不容错过开始------------- */}
                      <div>
                        <div className="booklist_tit_big">
                          <h3 className="pull-left m_r10">不容错过</h3>
                          <div className="pull-left tit_info">
                            <span className="line_xie m_r10">/</span>
                            文史社科类精品推荐
                          </div>
                        </div>
                        <div className="book_list m_t25">
                          <div className="booklist_box booklist_item1">
                            {/* {this.props.show} */}
                            <ul>
                              {this.props.show.map((item: any) => {
                                return (
                                  <li
                                    className="litesthome"
                                    style={{ marginRight: "28px" }}
                                    key={item.id}
                                  >
                                    <div className="pic">
                                      <a
                                        href="http://book.kongfz.com/117287/2396615125/"
                                        target="_blank"
                                      >
                                        <img src={item.imgSrc} />
                                      </a>
                                    </div>
                                    <div className="book_name">
                                      <a
                                        href="http://book.kongfz.com/244804/2544650564/"
                                        target="_blank"
                                        // title="曝书亭集"
                                      >
                                        {item.itemName}
                                      </a>
                                    </div>
                                    <div className="shop_name">
                                      <a
                                        href="http://shop.kongfz.com/244804/"
                                        target="_blank"
                                        // title="瑾秀阁"
                                      >
                                        {item.producter}
                                      </a>
                                    </div>
                                    <div className="bookjuti_price">
                                      <span>￥</span>
                                      {item.price}
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                            <div className="look_more">
                              <a
                                href="http://book.kongfz.com/Cxianzhuang/"
                                target="_blank"
                                className="pull-right"
                              >
                                ........................更多
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* -----------不容错过结束------------- */}
                    </div>
                  </div>
                </div>
                <div className="content-left"></div>
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------- */}
          </div>
        </body>
        {/* ------------------------------------------------------------------------------------------------------- */}
      </Layout>
    );
  }
}

// IndexPage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3001/api/noveltable");
//   const data = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   let novelshow;
//   return { show: data };
// };

// export default withRouter(IndexPage);
