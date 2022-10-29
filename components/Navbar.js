import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-expand navbar-dark bg-primary mb-4'>
            <div className='container'>
                <a className='navbar-brand' href='#'>
                    Bitcoin Price
                </a>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link href="/" className='nav-link'>
                               Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href="/about" className='nav-link'>
                               About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar