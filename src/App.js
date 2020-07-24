import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './components/ui/Nav'
import Header from './components/ui/Header'
import ArticleGrid from './components/articles/ArticleGrid'
import ItemDetail from './components/articles/ItemDetail'
import Contact from './contact'

const App = () => {

    return (
        <div>
            <Router >
                <Nav />
                <Switch>
                    <Route path="/" exact component={Header}/>
                    <Route path="/blog" exact component={ArticleGrid}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/blog/:slug" exact component={ItemDetail}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
