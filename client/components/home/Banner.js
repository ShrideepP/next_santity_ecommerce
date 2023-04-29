import { Link } from "react-scroll";

const Banner = () => {
    return (
        <section className="w-full h-fit spaceX">
            <div style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,.4)), url('/images/banner.jpg')` }} className="w-full h-[65vh] spaceX flex items-center bg-cover bg-center bg-no-repeat">
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl text-white font-extrabold tracking-wide uppercase">
                            Step Up Style
                        </h1>
                        <p className="text-xs md:text-sm text-secondary font-medium leading-loose">
                            Elevate Your Look with Fashionable and Comfortable Shoes 
                            <br className="hidden md:block" /> 
                            - Step Out in Confidence and Style
                        </p>
                    </div>
                    <div>
                        <Link to="best-sellers" spy={true} smooth={true} duration={250}>
                            <button className="px-6 h-10 bg-accent rounded-sm">
                                <span className="text-xs text-white font-bold tracking-wide uppercase">Shop Now</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;