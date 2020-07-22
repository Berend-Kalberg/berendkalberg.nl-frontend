import React, { useState } from 'react'

import logo from '../../assets/logo.png'

const Nav = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    function docReady(fn) {
        // see if DOM is already available
        if (document.readyState === "complete" || document.readyState === "interactive") {
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

            if(this.pageYOffset > 0) {
                element.classList.add("shadow-2xl")
                element.classList.remove("border-b")
              
            } else {
                element.classList.remove("shadow-2xl")
                element.classList.add("border-b")
            }
          })

    });


    return (

        <nav id="navigation" className="px-6 bg-white flex flex-wrap items-center animated border-b lg:py-0 py-2 fixed w-full">
            <div className="flex-1 flex justify-between items-center">
                <a href="/">
                    <img src={logo} width="56" height="56" alt=""/>
                </a>
            </div>

            <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
                <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                        <input type="search" value={text} name="search" onChange={(e) => onChange(e.target.value)} placeholder="Zoeken" className="w-full"/>
                    </li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/blog">Blog</a></li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/contact">Contact</a></li>
                </ul>
            </nav>
           

            </div>

        </nav>

    )
}

export default Nav
