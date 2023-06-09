import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/client";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const ProductCard = ({ name, slug, price, images }) => {
    return (
        <div>
            <Link href={`product/${slug}`}>
                <div className="space-y-6">
                    <div className="w-full h-60 relative overflow-hidden bg-secondary">
                        <Image
                            src={urlFor(images && images[0]).url()}
                            alt="product-image"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                            className="object-cover object-center scale-75 hover:scale-90" 
                        />
                    </div>
                    <div>
                        <h3 className="text-base text-dominant font-medium tracking-tight">
                            { name }
                        </h3>
                        <span className="block text-base text-compliment font-medium tracking-tight leading-loose">
                            USD: { formatter.format(price) }
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;