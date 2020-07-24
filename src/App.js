import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './components/ui/Nav'
import Header from './components/ui/Header'
import ArticleGrid from './components/articles/ArticleGrid'
import ItemDetail from './components/articles/ItemDetail'
import Contact from './contact'

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
                    <Route exact path="/" component={Header}/>
                    <Route exact path="/blog" component={ArticleGrid}/>
                    <Route path="/contact" component={Contact}/>   
                    <Route exact={true} path="/blog/:slug" component={ItemDetail}/>
                    <Route component={NoMatch} />      
                </Switch>          
            </Router>
        </div>
    )
}

export default App;
