import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { CartContext } from '@/context/CartContext';
import { runFireworks } from '@/lib/utils';

const success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = CartContext();
 
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
        <section className='w-full min-h-[70vh] spaceX grid place-items-center'>
            <div className='w-full md:w-4/5 lg:w-3/5 space-y-6 px-4 md:px-8 spaceY text-center bg-secondary rounded'>
                <div>
                    <BsBagCheckFill className='mx-auto text-4xl text-green-500' />
                </div>
                <div className='space-y-2'>
                    <h2 className='text-2xl text-dominant font-bold'>
                        Thank you for your Purchase!
                    </h2>
                    <p className='text-sm text-compliment font-normal leading-relaxed'>
                        Check your inbox for the receipt. <br />
                        If you have any questions please email us at <a href='#' className='text-accent font-medium'>contact@stepup.com</a>
                    </p>
                </div>
                <div>
                    <Link href='/'>
                        <button 
                            type='button'
                            className='w-48 h-10 text-center bg-accent hover:scale-105'
                        >
                            <span className='text-xs text-white font-bold uppercase'>Continue Shopping</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );

};

export default success;