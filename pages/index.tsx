// import Link from 'next/link'
import Layout from "../components/Layout";
import { withRouter } from "next/router";
// import { useEffect } from "react";
// import { Button } from 'antd';
//开启css模块化之后可以这样使用样式
// import cssobj from './index.less'
import "./css/index.css";
// import LunBoComponent from "./components/lunbo";
import "@/static/css/font-awesome.css";
// var data = require("../static/data.json");
import { Carousel } from "antd";

// 声明的全局数据
var imgnumber: number = 0;


const IndexPage = (props: any) => {
  // console.log(props);
  return (
    <Layout title="首页">
      <div className="container clear">
        <div className="nov-fir clear">
          <div className="code"></div>
        </div>
        <div className="dbg">
          <div className="nov-primary clear">豆瓣读书</div>
          <div className="nov-sec">
            <div className="novel">
              <a href="novelInit">小说</a>
            </div>
            <div className="essay">
              <a href="essayInit">散文</a>
            </div>
            <div className="poetry">
              <a href="proseInit">随笔</a>
            </div>
            <div className="work">
              <a href="literatureInit">文学</a>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------- */}
        {/* <LunBoComponent lunboObject={data.lunboObject} imgArray={data.imgArray} linkArray={data.linkArray}/>, document.getElementById('wrapper') */}
        <Carousel autoplay>
          <div>
            {/* <h3 className="contentStyle">1</h3> */}
            <img src= "../static/lunbo/lun0.jpg" width="1200" height="270" />
          </div>
          <div>
          <img src= "../static/lunbo/lun11.jpg" width="1200" height="270" />
          </div>
          <div>
          <img src= "../static/lunbo/lun2.jpg" width="1200" height="270" />
          </div>
          <div>
          <img src= "../static/lunbo/lun3.jpg" width="1200" height="270" />
          </div>
          <div>
          <img src= "../static/lunbo/lun4.jpg" width="1200" height="270" />
          </div>
        </Carousel>
        {/* , mountNode, */}
        <div className="nov-thi clear">
          <img src="../static/images/image/2.jpg"></img>
        </div>
        <div className="nov-for clear">
          <div>新书速递</div>
          <div>更多»</div>
        </div>
        {/* ----------------------------------------------- */}
        <div className="nov-fif clear">
          {props.show.map((item: any) => {
            imgnumber++;
            if (imgnumber < 22) {
              return (
                <div key={item}>
                  <img
                    src={`../static/images/image/${item.imgPath}`}
                    width="115"
                    height="172"
                  />
                  {item.bookName}
                  作者:{item.author}
                </div>
              );
            }
          })}
        </div>
        {/* ----------------------------------------------- */}
        {/* <%--豆瓣日历--%> */}
        <div className="nov-cal clear">
          <img src="../static/images/image/3.jpg" />
        </div>
        <div>
          <div className="book-news clear">图书资讯</div>
          <div className="book-news-content clear">
            <div className="bluetext">
              豆瓣一周新书速递｜陈春成首部短篇小说集，呈现汉语小说的一种风度与新的可能性
            </div>
            <div className="graytext">豆瓣读书</div>
            <div className="blacktext">
              虚构类
              *特别推荐仿佛鸟栖树，鱼潜渊，一切稳妥又安宁，夜晚这才真正地降临。
              《夜晚的潜水艇》是作家陈春成的首部短篇小说集。九个故事，笔锋游走于旧山河与未知宇宙间，以瑰奇飘扬的想象、温厚清幽的笔法，
              在现实与幻境间辟开若干条秘密的通道：海底漫游的少年、深山遗落的古碑、弥散入万物的字句、云彩修剪站、铸剑与酿酒、铁幕下的萨克斯、蓝鲸内的演奏厅……
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

//getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行
IndexPage.getInitialProps = async () => {
  const res = await fetch("http://localhost:3001/api/essaytable");
  const data = await res.json();
  //这边返回的数据会被挂载到组件的props中
  return { show: data };
};

export default withRouter(IndexPage);
