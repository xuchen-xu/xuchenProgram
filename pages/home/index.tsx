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
                  <a className="PC" href="/newbook">
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
                    src="../../static/images/lun5.jpg"
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
                    src="../../static/images/lun2.jpg"
                    width="1000"
                    height="270"
                  />
                </div>
                <div>
                  <img
                    src="../../static/images/lun3.jpg"
                    width="1000"
                    height="270"
                  />
                </div>
                <div>
                  <img
                    src="../../static/images/lun4.jpg"
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
                      <div className="m_b50">
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
                                if (item.id >= 11 && item.id < 21) {
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
                      {/* -----------不容错过结束------------- */}
                      {/* -----------超值低价开始------------- */}
                      <div>
                        <div className="chaozhidijia shop_booklist1 tiaozheng">
                          <div className="clearfix booklist_tit">
                            <h3 className="pull-left">超值低价</h3>
                            <div className="pull-right more_list">
                              <a href="" className="now">
                                10元专区
                              </a>
                              <a href="" className="now">
                                10-30元专区
                              </a>
                              <a href="" className="now">
                                30-50元专区
                              </a>
                            </div>
                            {/* 书籍展示模块 */}
                            <div className="book_list m_t25">
                              <div className="booklist_box booklist_item1">
                                {/* {this.props.show} */}
                                <ul>
                                  {this.props.show.map((item: any) => {
                                    if (item.id >= 21 && item.id < 31) {
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
                                          {/* <div className="shop_name">
                                            <a
                                              href="http://shop.kongfz.com/244804/"
                                              target="_blank"
                                              // title="瑾秀阁"
                                            >
                                              {item.producter}
                                            </a>
                                          </div> */}
                                          <div className="bookjuti_pricechao">
                                            <span>￥</span>
                                            {item.price}
                                          </div>
                                        </li>
                                      );
                                    }
                                  })}
                                </ul>
                                {/* <div className="look_more">
                                  <a
                                    href="http://book.kongfz.com/Cxianzhuang/"
                                    target="_blank"
                                    className="pull-right"
                                  >
                                    ........................更多
                                  </a>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* -----------超值低价结束------------- */}
                      <div className="no-more-box">没 有 更 多 了</div>
                    </div>
                  </div>
                </div>
                <div className="content-left">
                  <div className="shopLeftbar">
                    <div className="border_box">
                      {/* 第一列开始 */}
                      <div className="allinfo_box gray6">
                        <div>
                          <span className="fa m_r15 fa-bank iconfont"></span>
                          18215 家书店
                        </div>
                        <div className="m_t5">
                          <span className="fa m_r15 fa-life-ring iconfont"></span>
                          210102 家书摊
                        </div>
                        <div className="m_t5">
                          <span className="fa m_r15 fa-book iconfont"></span>
                          91440999 种图书
                        </div>
                      </div>
                      {/* 第一列结束 */}
                      {/* 第二列开始 */}
                      <div className="m_t34">
                        <h3>
                          销量排行榜 <span className="line">/</span> <a>更多</a>
                        </h3>
                        <div className="change_title_box clearfix">
                          <a className="now">周</a>
                          <a className="">月</a>
                          <a className="">年</a>
                        </div>
                        {/* ------列表数据 */}
                        <div className="change_text m_t10">
                          <ul style={{ display: "block" }}>
                            <li>
                              <span className="w_num pull-left c_red blod">
                                1.
                              </span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/73122/"
                                  target="_blank"
                                >
                                  海丝汉学芸窗
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left c_red blod">
                                2.
                              </span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/165050/"
                                  target="_blank"
                                >
                                  墨笺楼商城
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left c_red blod">
                                3.
                              </span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/233701/"
                                  target="_blank"
                                >
                                  光和書房
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">4.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/193535/"
                                  target="_blank"
                                >
                                  懂德善本书阁
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">5.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/69378/"
                                  target="_blank"
                                >
                                  淘宝画廊
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">6.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/22912/"
                                  target="_blank"
                                >
                                  大舍艺术书店
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">7.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/26231/"
                                  target="_blank"
                                >
                                  华日书店
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">8.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/177675/"
                                  target="_blank"
                                >
                                  悦然书店
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">9.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/26986/"
                                  target="_blank"
                                >
                                  一得书苑
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">10.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/3669/"
                                  target="_blank"
                                >
                                  通雅轩
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        {/* ------列表数据 */}
                      </div>
                      {/* 第二列结束 */}
                      {/* 第三列开始 */}
                      <div className="m_t34">
                        <h3>
                          综合排行榜 <span className="line">/</span> <a>更多</a>
                        </h3>
                        {/* <div className="change_title_box clearfix">
                          <a className="now">周</a>
                          <a className="">月</a>
                          <a className="">年</a>
                        </div> */}
                        {/* ------列表数据 */}
                        <div className="change_text m_t10">
                          <ul style={{ display: "block" }}>
                            <li>
                              <span className="w_num pull-left c_red blod">
                                1.
                              </span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/73122/"
                                  target="_blank"
                                >
                                  孔龙书社A
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left c_red blod">
                                2.
                              </span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/165050/"
                                  target="_blank"
                                >
                                  学到老书店
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left c_red blod">
                                3.
                              </span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/233701/"
                                  target="_blank"
                                >
                                  孔龙文体公司
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">4.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/193535/"
                                  target="_blank"
                                >
                                  需配书院 (南京书店)
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">5.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/69378/"
                                  target="_blank"
                                >
                                  玉璞书屋
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">6.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/22912/"
                                  target="_blank"
                                >
                                  丝绸之路旧书店
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">7.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/26231/"
                                  target="_blank"
                                >
                                  哥俩书屋
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">8.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/177675/"
                                  target="_blank"
                                >
                                  学到老书城
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">9.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/26986/"
                                  target="_blank"
                                >
                                  北京市百与文化传媒
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">10.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/3669/"
                                  target="_blank"
                                >
                                  育德书店
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        {/* ------列表数据 */}
                      </div>
                      {/* 第三列结束 */}
                      {/* 第四列开始 */}
                      <div className="m_t34">
                        <h3>每周推荐榜</h3>
                        {/* <div className="change_title_box clearfix">
                          <a className="now">周</a>
                          <a className="">月</a>
                          <a className="">年</a>
                        </div> */}
                        {/* ------列表数据 */}
                        <div className="change_text m_t10">
                          <ul style={{ display: "block" }}>
                            <li>
                              <span className="w_num pull-left c_red blod">
                                1.
                              </span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/73122/"
                                  target="_blank"
                                >
                                  贵阳五之堂书店
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left c_red blod">
                                2.
                              </span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/165050/"
                                  target="_blank"
                                >
                                  书之墟
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left c_red blod">
                                3.
                              </span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/233701/"
                                  target="_blank"
                                >
                                  范特西书店
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">4.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/193535/"
                                  target="_blank"
                                >
                                  常州万象古旧书店
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">5.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/69378/"
                                  target="_blank"
                                >
                                  五泉淘书斋
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">6.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/22912/"
                                  target="_blank"
                                >
                                  西文涉华
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">7.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/26231/"
                                  target="_blank"
                                >
                                  爱莉书屋
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">8.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/177675/"
                                  target="_blank"
                                >
                                  钢铁馒头二号店
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">9.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/26986/"
                                  target="_blank"
                                >
                                  徐记书斋
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="w_num pull-left">10.</span>
                              <span className="text_box">
                                <a
                                  href="http://shop.kongfz.com/3669/"
                                  target="_blank"
                                >
                                  京剧书店
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        {/* ------列表数据 */}
                      </div>
                      {/* 第四列结束 */}
                      {/* 第五列开始 */}
                      <div className="lm_box m_t50">
                        <h3>
                          书店联盟 <span className="line">/</span> <a>更多</a>
                        </h3>
                        <ul className="list">
                          <li>
                            <a target="_blank">
                              <span className="pull-right">3210</span>北京市
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">850</span>上海市
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">410</span>天津市
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">236</span>重庆市
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">494</span>安徽省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">315</span>福建省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">200</span>甘肃省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">870</span>广东省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">180</span>广西
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">79</span>贵州省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">34</span>海南省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">1257</span>河北省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">899</span>河南省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">323</span>黑龙江省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">593</span>湖北省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">401</span>湖南省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">326</span>吉林省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">1156</span>江苏省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">293</span>江西省
                            </a>
                          </li>
                          <li>
                            <a target="_blank">
                              <span className="pull-right">706</span>辽宁省
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* 第五列结束 */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* -----------------------主体结束----------------------------- */}
            {/* 底部开始 */}
            <div className="footer-box">
              <div className="footer-wrap clearfix">
              <div className="copyright-info-box">© 2002-2021  Kongfz.com 孔子旧书网  版权所有</div>
              <div className="link-box">
            <a className="item" target="_blank" rel="nofollow" href="http://www.kongfz.com/help/aboutus.php">关于孔网</a>
            <a className="item" target="_blank" rel="nofollow" href="http://www.kongfz.com/help/lianxi.html">联系我们</a>
            <a className="item" target="_blank" rel="nofollow" href="http://help.kongfz.com/">帮助中心</a>
            <a className="item" target="_blank" rel="nofollow" href="http://www.kongfz.com/help/copyright.php">版权隐私</a>
            <a className="item" target="_blank" rel="nofollow" href="http://www.kongfz.com/help/guanggao.php">广告业务</a>
            <a className="item" target="_blank" rel="nofollow" href="http://www.kongfz.com/help/zhaopin.php">工作机会</a>
            <a className="item" target="_blank" href="https://m.kongfz.com/">移动版</a>
            <a className="item" target="_blank" href="http://book.kongfz.com/">图书目录</a>
            <a className="item" target="_blank" href="http://bq.kongfz.com/">图书标签</a>
        </div>
              </div>
            </div>

            {/* 底部结束 */}
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
