import React from 'react'
import profile from '../../assets/profile-circle.jpeg'

const Header = () => {
    return (
        <div className="masthead" role="img" aria-label="header">
            <div>
                <img src={profile} alt="profile" className="rounded-full xs:mb-3 lg:mb-10 sm:mb-5 md:mb-7 header-img border-orange-500"/>
                <h2 className="header-title">
                    CREATIVE
                </h2>
                <h2 className="header-title">
                    DEVELOPER
                </h2>
                <h3 className="px-2 md:mt-5 sm:mt-0 lg:mt-10">Opzoek naar meewerkstage periode september - december/januari</h3>
                <a href="#over">
                    <svg className="animate-bounce lg:mt-10 md:mt-6 sm:mt-4 xs:mt-2 w-6 h-6 text-orange-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="#ff8a00">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Header
