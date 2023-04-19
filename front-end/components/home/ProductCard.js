import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/client";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const ProductCard = ({ id, name, price, images }) => {
    return (
        <div>
            <Link href={`product/${id}`}>
                <div className="space-y-6">
                    <div className="w-full h-60 relative overflow-hidden rounded shadow">
                        <Image
                            src={urlFor(images[0]).url()}
                            alt="product-image"
                            fill
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                            className="object-cover hover:scale-[1.2]" 
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg text-dominant font-extrabold tracking-wide uppercase">
                            { name }
                        </h3>
                        <h4 className="text-lg text-accent font-bold tracking-wide uppercase">
                            { formatter.format(price) }
                        </h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;