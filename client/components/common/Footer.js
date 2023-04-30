import React from "react";

const Footer = () => {
    return (
        <footer className="w-full h-[15vh] spaceX grid place-items-center">
            <div>
                <p className="text-sm text-center text-dominant font-medium leading-relaxed">
                    Next Cart 2023 | Built using <span className="text-accent font-semibold">Next JS,</span> <span className="text-accent font-semibold">Tailwind CSS,</span> <span className="text-accent font-semibold">Sanity</span> and <span className="text-accent font-semibold">Stripe</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;