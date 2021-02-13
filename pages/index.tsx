import Link from 'next/link'
import Layout from '../components/Layout'
import { Button } from 'antd';
import  "./index.css"


const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="title">Hello Next.js 👋</h1>
    <Button href="" type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button href="" type="dashed">Dashed Button</Button>
    <br />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/components/city?title=123">来到城市</Link>
    </p>
    <Link href={{ pathname: '/about', query: { title: "test" } }}>
      <a>来到无锡测试</a>
    </Link>
  </Layout>
)

export default IndexPage
