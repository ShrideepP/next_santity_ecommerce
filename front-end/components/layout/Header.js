import { GrShop } from 'react-icons/gr';

const Header = () => {
    return (
        <header className="w-full h-[15vh]">
            <nav className="w-full h-full spaceX flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-poppins font-extrabold uppercase">
                        <span className="text-dominant">Step</span>
                        <span className="text-accent">Up</span>
                    </h1>
                </div>
                <div>
                    <button 
                        type='button' 
                        className='w-12 h-12 grid place-items-center relative'
                    >
                        <GrShop className='text-2xl text-dominant' />
                        <span className='w-4 h-4 text-xs text-white font-medium grid place-items-center absolute top-0 right-0 bg-accent rounded-full'>
                            0
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;