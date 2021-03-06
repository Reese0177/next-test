import Navbar from "./Navbar";
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitzprice</title>
            <link rel="stylesheet" href="https://bootswatch.com/5/minty/bootstrap.css"/>
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;