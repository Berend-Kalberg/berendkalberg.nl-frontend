import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import CookieConsent from "react-cookie-consent"

import Nav from './components/ui/Nav'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import About from './components/About'
import ArticleGrid from './components/articles/ArticleGrid'
import ItemDetail from './components/articles/ItemDetail'
import BlogHeader from './components/articles/BlogHeader'
import ScrollToTop from './ScrollToTop'

const NoMatch = () => (
    <Redirect to="/"/>
)


const App = () => {

    return (
        <div>
            <Router >
                <ScrollToTop />
                <Nav />
                <Route exact path="/blog" component={BlogHeader}/>
                <Switch>
                    <Route exact path="/" render={props => 
                        <div>
                            <Header />
                            <About />
                        </div>
                    } />
                    <Route exact path="/blog" component={ArticleGrid}/>  
                    <Route exact path="/blog/:slug" component={ItemDetail}/>
                    <Route component={NoMatch} />      
                </Switch>
                <Footer />
                <CookieConsent
                    Location="bottom"
                    buttonText="Ik begrijp het"
                    buttonStyle={{ background: "#ff8a00"}}
                    style={{ background: "#fff", boxShadow: "0 -25px 50px -12px rgba(0, 0, 0, 0.25)"}}
                > 
                Deze website maakt gebruik van cookies en trackers.
                </CookieConsent>
            </Router>
        </div>
    )
}

export default App;
