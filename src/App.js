import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './components/ui/Nav'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import About from './components/About'
import ArticleGrid from './components/articles/ArticleGrid'
import ItemDetail from './components/articles/ItemDetail'
import Contact from './Contact'

const NoMatch = ({location}) => (
    <div className="pt-20">
        <h1>No match for <code>{location.pathname}</code></h1>
    </div>
)


const App = () => {

    return (
        <div>
            <Router >
                <Nav />
                <Switch>

                    <Route exact path="/" render={props => 
                        <div>
                            <Header />
                            <About />
                        </div>
                    } />

                    <Route exact path="/blog" component={ArticleGrid}/>
                    <Route path="/contact" component={Contact}/>   
                    <Route exact={true} path="/blog/:slug" component={ItemDetail}/>
                    <Route component={NoMatch} />      
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App;
