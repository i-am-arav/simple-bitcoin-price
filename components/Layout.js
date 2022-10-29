import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
        <Head>
            <title>
                Bitcoin Prices
            </title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous"></link>
        </Head>
        <Navbar/>
        <div className='container'>{children}</div>
    </div>
  )
}

export default Layout;
