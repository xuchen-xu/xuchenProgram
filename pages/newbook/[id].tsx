import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import { useRouter } from "next/router";
import React, { useState } from "react";
// import { Button } from 'antd';
// import { useEffect } from 'react'

// let bookidtest = 0;
const IndexPage = (props: any) => {
 
  return (
    <Layout title="详情页">
      <div>
        
        
      </div>
    </Layout>
  );
};

IndexPage.getInitialProps = async (context: any) => {
  // console.log(context.query)
  const { id } = context.query;
  const res = await fetch(`http://localhost:3001/essay/${id}`);
  const data = await res.json();
  //这边返回的数据会被挂载到组件的props中
//   console.log(data)
  return { show: data };
};

export default withRouter(IndexPage);
