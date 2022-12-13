import React from 'react';
import Link from "next/link";

const Navbar = ({}) => {
    return (
        <nav className="text-2xl font-medium z-20 relative">
            <ul className="flex gap-12">
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={'contact'}>
                    Contact
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
// by Rokas with ❤️
