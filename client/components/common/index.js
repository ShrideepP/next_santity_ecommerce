import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ContextProvider } from "@/context/CartContext";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Next JS + Sanity + Tailwind CSS</title>
            </Head>
            <ContextProvider>
                <main className="w-full h-fit font-poppins relative z-0 bg-white">
                    <Header />
                    { children }
                    <Footer />
                </main>
            </ContextProvider>
        </>
    );
};

export default Layout;