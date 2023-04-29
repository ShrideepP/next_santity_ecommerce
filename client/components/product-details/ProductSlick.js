import React, { useRef } from 'react';
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { urlFor } from '@/lib/client';
import { BiCaretRight, BiCaretLeft } from 'react-icons/bi';

const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const ProductSlick = ({ images }) => {
    const slick = useRef(null);
    return (
        <div className='w-full h-fit relative'>
            <Slider {...settings} ref={slick}>
                {images?.map(image => (
                    <div key={image?._key} className='w-full h-96 relative grid place-items-center bg-secondary'>
                        <Image
                            src={urlFor(image && image).url()}
                            alt='product-image'
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                            className='object-contain scale-125'
                        />
                    </div>
                ))}
            </Slider>
            <div className='w-full px-2 md:px-4 lg:px-6 flex justify-between absolute top-2/4 -translate-y-2/4'>
                <button onClick={() => slick.current.slickPrev()} type='button' className='w-8 h-8 grid place-items-center bg-gray-900 hover:bg-gray-950'>
                    <BiCaretLeft className='text-sm text-white' />
                </button>
                <button onClick={() => slick.current.slickNext()} type='button' className='w-8 h-8 grid place-items-center bg-gray-900 hover:bg-gray-950'>
                    <BiCaretRight className='text-sm text-white' />
                </button>
            </div>
        </div>
    );
};

export default ProductSlick;