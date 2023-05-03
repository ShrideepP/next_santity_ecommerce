import React, { useRef } from 'react';
import { CartContext } from '@/context/CartContext';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineLeft } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { urlFor } from '@/lib/client';
import { formatter } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import getStripe from '@/lib/stripe';
import { toast } from 'react-hot-toast';

const Cart = () => {

    const cartRef = useRef(null);

    const { totalPrice, totalQuantities, onRemove, cartItems, setShowCart, toggleCartItemsQuantity } = CartContext();

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if(response.statusCode === 500) return;
        
        const data = await response.json();

        toast.loading('Redirecting...');

        stripe.redirectToCheckout({ sessionId: data.id });
    };
    
    return (
        <aside ref={cartRef} style={{background: 'rgba(0,0,0,.2)'}} className='w-full h-screen flex justify-end fixed top-0 left-0 z-50'>
            <div className='w-full md:w-2/4 lg:w-[35%] h-screen overflow-y-scroll space-y-4 md:space-y-6 lg:space-y-8 px-4 md:px-8 spaceY bg-white'>
                <button 
                    type='button'
                    onClick={() => setShowCart(false)}
                    className='w-full flex items-center gap-x-2'
                >
                    <AiOutlineLeft className='text-base text-dominant' />
                    <span className='text-xs text-dominant font-semibold'>Your Cart</span>
                    <span className='text-xs text-accent font-semibold'>({totalQuantities})</span>
                </button>
                {cartItems.length < 1 ? (
                    <div className='w-full h-[80vh] grid place-items-center'>
                        <div className='space-y-4 text-center'>
                            <h3 className='text-center text-sm text-compliment font-medium'>
                                Your Cart is currently empty :(
                            </h3>
                            <div className='flex justify-center'>
                                <Link href='/'>
                                    <button 
                                        type='button' 
                                        onClick={() => setShowCart(false)}
                                        className='w-48 h-10 text-center bg-accent hover:scale-105'
                                    >
                                        <span className='text-xs text-white font-bold uppercase'>Continue Shopping</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='w-full h-fit space-y-2'>
                        {cartItems.map(item => (
                            <div key={item._id} className='w-full flex items-center gap-x-4'>
                                <div className='w-2/5 h-24 relative bg-secondary'>
                                    <Image
                                        src={urlFor(item?.image[0]).url()}
                                        alt='product-image'
                                        fill
                                        sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                        className='object-contain' 
                                    />
                                </div>
                                <div className='w-3/5 space-y-2'>
                                    <div>
                                        <h3 className="text-sm text-dominant font-medium tracking-tight">
                                            { item.name.length <= 20 ? item.name : item.name.slice(0, 20) + '...' }
                                        </h3>
                                        <span className="block text-sm text-compliment font-medium tracking-tight leading-loose">
                                            USD: { formatter.format(item.price) }
                                        </span>
                                    </div>
                                    <div className='w-full flex justify-between items-center'> 
                                        <div className='inline-flex border border-compliment'>
                                            <button onClick={() => toggleCartItemsQuantity(item._id, 'decrement')} type='button' className='w-8 h-8 grid place-items-center border-r border-compliment'>
                                                <AiOutlineMinus className='text-xs text-dominant' />
                                            </button>
                                            <span className='w-8 h-8 grid place-items-center text-xs text-compliment font-medium'>{item.quantity}</span>
                                            <button onClick={() => toggleCartItemsQuantity(item._id, 'increment')} type='button' className='w-8 h-8 grid place-items-center border-l border-compliment'>
                                                <AiOutlinePlus className='text-xs text-dominant' />
                                            </button>
                                        </div>
                                        <button onClick={() => onRemove(item)} type='text'>
                                            <MdDeleteOutline className='text-xl text-red-500' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {cartItems.length >= 1 && (
                    <div className='w-full space-y-2'>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm text-dominant font-medium tracking-tight'>Total:</span>
                            <span className='text-sm text-accent font-medium tracking-tight'>
                                {formatter.format(totalPrice)}
                            </span>
                        </div>
                        <div>
                            <button 
                                onClick={handleCheckout}
                                type='button'
                                className='w-full h-10 grid place-items-center bg-accent hover:scale-105'
                            >
                                <span className='text-xs text-white font-bold uppercase'>
                                    Pay with Stripe
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );

};

export default Cart;