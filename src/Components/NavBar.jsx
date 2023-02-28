import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react';

function NavBar() {

    const [active, setactive] = useState(false);

    const links = [{label: 'Home' , target: '#home'},{label: 'Prices',target: '#prices'},{label: 'Networks', target: '#networks'}];
    
    return (
        <div className="flex bg-violet-700 md:items-center md:flex-row flex-col items-start justify-between">
            <div className='m-2 text-xl text-white'>
                NavBar
            </div>
            <a href='#' onClick={function(){setactive(!active)}} className='toggle-button md:hidden flex flex-col absolute top-3 right-4'>
                <RxHamburgerMenu className='text-white'/>
            </a>
            <div className="md:w-auto w-full">
                <ul className={`${active ? 'active' : 'inactive' } items-center flex-col md:flex-row`}>
                    {links.map((link) => {
                        return <li className="text-center px-8 py-4 md:py-3 hover:pointer md:w-28 hover:bg-violet-900" key={link.label}>
                                    <a className="text-white" href={link.target}>
                                        {link.label}
                                    </a>
                                </li>}
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NavBar