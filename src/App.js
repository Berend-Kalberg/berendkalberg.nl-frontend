import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './components/ui/Nav'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import About from './components/About'
import ArticleGrid from './components/articles/ArticleGrid'
import ItemDetail from './components/articles/ItemDetail'
import BlogHeader from './components/BlogHeader'

const NoMatch = ({location}) => (
    <div className="pt-20 px-5">
        <h1><code>{location.pathname}</code> bestaat niet, probeer een andere URL.</h1>
    </div>
)


const App = () => {

    return (
        <div>
            <Router >
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
                    <Route exact={true} path="/blog/:slug" component={ItemDetail}/>
                    <Route component={NoMatch} />      
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App;
