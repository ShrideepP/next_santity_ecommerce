import React from "react";
import { client } from "@/lib/client";
import ProductSlick from "@/components/product-details/ProductSlick";
import ProductInfo from "@/components/product-details/ProductInfo";

const ProductDetails = ({ product }) => {
    return (
        <section className="w-full min-h-[70vh] spaceX grid place-items-center grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
            <ProductSlick images={product.image} />
            <ProductInfo product={product} />
        </section>
    );
};

export const getStaticPaths = async () => {
    
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: { 
            slug: product.slug.current
        },
    }));

    return {
        paths,
        fallback: 'blocking'
    };

};

export const getStaticProps = async ({ params: { slug } }) => {

    const productQuery = `*[_type == "product" && slug.current == "${slug}"][0]`;
    const product = await client.fetch(productQuery);

    return {
        props: {
            product,
        },
    };

};

export default ProductDetails;