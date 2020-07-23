import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'

import Nav from './components/ui/Nav'
import Header from './components/ui/Header'
import ArticleGrid from './components/articles/ArticleGrid'
import ItemDetail from './components/articles/ItemDetail'
import Contact from './contact'

const App = () => {

    return (
        <div>
            <HashRouter basename='/'>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Header}/>
                    <Route path="/blog" exact component={ArticleGrid}/>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/blog/:slug" exact component={ItemDetail}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App;
