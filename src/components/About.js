import React from 'react'

// TODO
// Add location / work area to about page

const About = () => {
    return (
        <section id="over">
            <section id="student">
                <div className="masthead-white sm:px-2">
                    <div>
                        <h2>Student</h2>
                        <br></br>
                        <h3>Creative Media &amp; Game Technologies <span className="text-blue-500"><a href="https://www.hogeschoolrotterdam.nl/opleidingen/bachelor/creative-media-and-game-technologies/voltijd/">@Hogeschool Rotterdam</a></span></h3>
                    </div>
                </div>
            </section>
            <section id="passionated">
                <div className="masthead-white sm:px-2">
                    <div>
                        <a href="#passionated">
                            <h2>Gepassioneerd</h2>
                        </a>
                        <br></br>
                        <ul>
                            <li>Coder</li>
                            <li>Thinker</li>
                            <li>Maker</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="portfolio">
                <div className="masthead-white sm:px-2">
                    <div>
                        <h2>Meer weten over mijn werk?</h2>
                        <br></br>
                        <h3>Bekijk mijn <span className="text-blue-500"><a href="/blog">blog</a></span></h3>
                    </div>
                </div>
            </section>
            <section id="experience">
                <div className="masthead-white sm:px-2">
                    <div>
                        <h2>Niewsgierig naar mijn ervaring?</h2>
                        <br></br>
                        <h3>Bekijk hier mijn CV</h3>
                        <br></br>
                        <div className="flex mx-auto lg:px-40">
                        <iframe className="pdf" src="./resume.pdf" type="application/pdf" width="100%" title="CV Berend Kalberg">
                            Deze browser ondersteund geen PDF's. Download de PDF om deze in te zien
                        </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default About
