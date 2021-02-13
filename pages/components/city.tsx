// import Link from "next/link";
import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import { Button } from 'antd';

const IndexPage = (props:any) => <Layout title="这是city页面">
    <div>city页面{props.router.query.title}</div>
    <Button></Button>
</Layout>;

export default withRouter(IndexPage);
