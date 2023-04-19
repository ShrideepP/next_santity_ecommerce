import Banner from "@/components/home/Banner";
import BestSellers from "@/components/home/BestSellers";
import Newsletter from "@/components/home/Newsletter";
import { client } from "@/lib/client";

const HomePage = ({ products }) => {
    return (
        <>
            <Banner />
            <BestSellers products={ products } />
            <Newsletter />
        </>
    );
};

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    return {
        props: {
            products,
        },
    };
}; 

export default HomePage;