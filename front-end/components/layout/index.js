import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <main className="w-full h-fit font-poppins relative z-0 bg-secondary">
            <Header />
            { children }
            <Footer />
        </main>
    );
};

export default Layout;