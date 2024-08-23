// Next.js’ Link API.*/
import Link from "next/link";

// Built-in component to append <head>
import Head from "next/head";


// Components Import
import Header from "./Header";


const Layout = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <div className="layout-grid">
      <Header />

      {props.children}
    </div>
  </div>
);

export default Layout;
