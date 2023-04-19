const Newsletter = () => {
    return (
        <section className="w-full h-fit spaceX">
            <div className="w-full h-fit spaceX spaceY bg-accent rounded shadow">
                <div className="space-y-2 text-center mb-6 md:mb-9 lg:mb-12">
                    <h2 className="text-3xl text-white font-extrabold uppercase">
                        Newsletter
                    </h2>
                    <hr className="w-28 h-[2px] mx-auto border-0 bg-secondary rounded" />
                    <p className="text-xs md:text-sm text-secondary font-medium leading-relaxed">
                        Get Exclusive Deals, New Arrivals, and Style Tips Straight to Your Inbox!
                    </p>
                </div>
                <form 
                    onSubmit={event => event.preventDefault()}
                    className="w-full grid grid-cols-1 md:grid-cols-3 gap-2"
                >
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        style={{backgroundColor: 'rgba(255, 255, 255, .15)'}} 
                        className="w-full px-4 py-3 text-white placeholder:text-gray-200 text-sm font-semibold outline-none border-0 rounded-sm" 
                        />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        style={{backgroundColor: 'rgba(255, 255, 255, .15)'}} 
                        className="w-full px-4 py-3 text-white placeholder:text-gray-200 text-sm font-semibold outline-none border-0 rounded-sm" 
                    />
                    <button 
                        type="submit" 
                        className="w-full py-3 text-center bg-dominant hover:bg-compliment rounded-sm"
                    >
                        <span className="text-white text-sm font-semibold tracking-wide uppercase">Subscribe</span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;