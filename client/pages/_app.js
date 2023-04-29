import Layout from '@/components/common';
import '@/styles/globals.css';
// import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            {/* <Toaster /> */}
            <Component {...pageProps} />
        </Layout>
    );
};
