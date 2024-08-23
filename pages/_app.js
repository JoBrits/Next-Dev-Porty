// Import Global Styles
import '../styles/global.css'

// Components Import
import Layout from "../components/MyLayout";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp