import React from 'react';
import Feed from './Feed';
import Navbar from './Navbar';
import Footer from './Footer';
import MeioPagina from './MeioPagina';

function PagPrincipal() {
    return (
        <>
        <Navbar/>
        <div className="m-24 space-y-20 > *">
            <MeioPagina/>
            <Feed/>
        </div>
        <Footer/>
        </>
    )
}

export default PagPrincipal;