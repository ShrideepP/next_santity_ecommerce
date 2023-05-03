import React from 'react';
import { AiFillStar, AiOutlineStar, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { CartContext } from '@/context/CartContext';
import { formatter } from '@/constants';
 
const ProductInfo = ({ product }) => {

    const { quantity, increaseQuantity, setShowCart, decreaseQuantity, onAdd } = CartContext();

    const handleBuyNow = () => {
        onAdd(product, quantity);
        setShowCart(true);
    };

    return (
        <div className='w-full h-fit space-y-4'>
            <div className='space-y-2'>
                <h1 className='text-xl text-dominant font-medium tracking-tight'>{product.name}</h1>
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
            <h5 className='text-xl text-accent font-medium'>{formatter.format(product.price)}</h5>
            <div className='inline-flex border border-compliment'>
                <button onClick={decreaseQuantity} type='button' className='w-10 h-9 grid place-items-center border-r border-compliment'>
                    <AiOutlineMinus className='text-xs text-dominant' />
                </button>
                <span className='w-10 h-9 grid place-items-center text-sm text-compliment font-medium'>{quantity}</span>
                <button onClick={increaseQuantity} type='button' className='w-10 h-9 grid place-items-center border-l border-compliment'>
                    <AiOutlinePlus className='text-xs text-dominant' />
                </button>
            </div>
            <div className='flex gap-x-4'>
                <button onClick={() => onAdd(product, quantity)} type='button' className='w-36 h-10 grid place-items-center border border-accent hover:scale-105'>
                    <span className='text-xs text-accent font-bold uppercase'>Add To Cart</span>
                </button>
                <button onClick={handleBuyNow} type='button' className='w-36 h-10 grid place-items-center bg-accent  hover:scale-105'>
                    <span className='text-xs text-white font-bold uppercase'>Buy Now</span>
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;