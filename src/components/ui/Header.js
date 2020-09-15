import React from 'react'
import profile from '../../assets/profile-circle.jpeg'

const Header = () => {
    return (
        <div className="masthead" role="img" aria-label="header">
            <div>
                <img src={profile} alt="profile" className="rounded-full mb-10 header-img border-orange-500"/>
                <h2>
                    CREATIVE
                </h2>
                <h2>
                    DEVELOPER
                </h2>
                <h3 className="px-2 mt-10">Opzoek naar meewerkstage periode september - december/januari</h3>
                <a href="#over">
                    <div class='icon-scroll'></div>
                </a>
            </div>
        </div>
    )
}

export default Header
