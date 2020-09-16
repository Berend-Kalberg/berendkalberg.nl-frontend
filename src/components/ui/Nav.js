import React from 'react'

import logo from '../../assets/logo.png'

const Nav = () => {
    
    function docReady(fn) {
        // see if DOM is already available
        if (document.readyState === "complete" || document.readyState === "interactive" || document.readyState !== 'loading') {
            // call on next available tick
            setTimeout(fn, 1);
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }    

    docReady(function() {
        // DOM is loaded and ready for manipulation here
        window.addEventListener("scroll", function() {

            let element = document.getElementById("navigation")

            if(this.pageYOffset > 15) {
                element.classList.add("shadow-2xl", "p-0")
                element.classList.remove("border-b", "p-4")              
            } else {
                element.classList.remove("shadow-2xl", "p-0")
                element.classList.add("border-b", "p-4")
            }
        })
    });

    return (

        <nav id="navigation" className="px-6 ease bg-white flex flex-wrap items-center animated border-b lg:py-0 fixed w-full p-4">

            <div className="flex-1 flex justify-between items-center hover:border-orange-500">
                <a href="/">
                    <img src={logo} width="56" height="56" alt="logo"/>
                </a>
            </div>

            <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input className="hidden" type="checkbox" id="menu-toggle"/>

            <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><a className="lg:p-4 py-3 sm:px-3 block border-b-2 border-transparent hover:border-orange-500" href="/#over">Over</a></li>
                        <li><a className="lg:p-4 py-3 sm:px-3 block border-b-2 border-transparent hover:border-orange-500" href="/blog">Blog</a></li>
                    </ul>
                </nav>
            </div>

        </nav>

    )
}

export default Nav
