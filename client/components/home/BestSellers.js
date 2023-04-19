import ProductCard from "./ProductCard";
import Masonry from 'react-masonry-css'

const BestSellers = ({ products }) => {

    const breakPoints = {
        default: 3,
        1024: 2,
        768: 1,
    };

    return (
        <section id="best-sellers" className="w-full h-fit spaceX spaceY">
            <div className="space-y-2 text-center mb-6 md:mb-9 lg:mb-12">
                <h2 className="text-3xl text-dominant font-extrabold uppercase">
                    Best Sellers
                </h2>
                <hr className="w-28 h-[2.5px] mx-auto border-0 bg-accent rounded" />
                <p className="text-xs md:text-sm text-compliment font-medium leading-relaxed">
                    Elevate Your Look with Fashionable and Comfortable Shoes
                </p>
            </div>
            <Masonry
                breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {products?.map(product => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        images={product.image}
                    />
                ))}
            </Masonry>
        </section>
    );
    
};

export default BestSellers;