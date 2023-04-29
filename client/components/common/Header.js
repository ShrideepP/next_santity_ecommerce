import { GrShop } from 'react-icons/gr';
import { CartContext } from '@/context/CartContext';
import Cart from './Cart';
import Link from 'next/link';

const Header = () => {
    const { showCart, setShowCart, totalQuantities } = CartContext();
    return (
        <>
            <header className="w-full h-[15vh]">
                <nav className="w-full h-full spaceX flex justify-between items-center">
                    <div>
                        <Link href='/'>
                            <h1 className="text-2xl font-poppins font-extrabold uppercase">
                                <span className="text-dominant">Step</span>
                                <span className="text-accent">Up</span>
                            </h1>
                        </Link>
                    </div>
                    <div>
                        <button type='button' onClick={() => setShowCart(true)} className='w-12 h-12 grid place-items-center relative'>
                            <GrShop className='text-2xl text-dominant' />
                            <span className='w-4 h-4 text-xs text-white font-medium grid place-items-center absolute top-0 right-0 bg-accent rounded-full'>{totalQuantities}</span>
                        </button>
                    </div>
                </nav>
            </header>
            {showCart && <Cart />}
        </>
    );
};

export default Header;