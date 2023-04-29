import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CartContext } from '@/context/CartContext';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
 
const ProductInfo = ({ product }) => {

    const { quantity, increaseQuantity, decreaseQuantity, onAdd } = CartContext();

    return (
        <div className='w-full h-fit space-y-4'>
            <div className='space-y-2'>
                <h1 className='text-2xl text-dominant font-extrabold'>{product.name}</h1>
                <p className='text-sm text-compliment font-normal leading-relaxed'>{product.details}</p>
            </div>
            <div className='flex items-center gap-x-1'>
                <AiFillStar className='text-base text-yellow-400' />
                <AiFillStar className='text-base text-yellow-400' />
                <AiFillStar className='text-base text-yellow-400' />
                <AiOutlineStar className='text-base text-yellow-400' />
                &nbsp;
                <span className='text-xs text-compliment font-medium'>(20)</span>
            </div>
            <h5 className='text-lg text-accent font-bold'>{formatter.format(product.price)}</h5>
            <div className='inline-flex border border-compliment'>
                <button onClick={decreaseQuantity} type='button' className='w-10 h-9 grid place-items-center border-r border-compliment'>
                    <span className='text-lg text-compliment font-semibold'>-</span>
                </button>
                <span className='w-10 h-9 grid place-items-center text-sm text-compliment font-medium'>{quantity}</span>
                <button onClick={increaseQuantity} type='button' className='w-10 h-9 grid place-items-center border-l border-compliment'>
                    <span className='text-lg text-compliment font-semibold'>+</span>
                </button>
            </div>
            <div className='flex gap-x-4'>
                <button onClick={() => onAdd(product, quantity)} type='button' className='w-36 h-10 grid place-items-center border border-accent'>
                    <span className='text-xs text-accent font-bold uppercase'>Add To Cart</span>
                </button>
                <button type='button' className='w-36 h-10 grid place-items-center bg-accent'>
                    <span className='text-xs text-white font-bold uppercase'>Buy Now</span>
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;