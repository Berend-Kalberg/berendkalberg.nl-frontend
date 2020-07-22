import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Contact from './contact'

import Nav from './components/ui/Nav'
import Header from './components/ui/Header'
import ArticleGrid from './components/articles/ArticleGrid'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



const App = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect (() => {
        const fetchItems = async () => {
            
            const result = await axios (`https://berendkalberg-backend.herokuapp.com/articles?title_contains=${query}`)

            setItems(result.data)
            setIsLoading(false)
        }

    fetchItems()
    }, [query])


    return (
        <div>
            <Router >
                <Nav getQuery={(q) => setQuery(q)}/>
                <Switch>
                    <Route path="/" exact component={Header}/>
                </Switch>

                <ArticleGrid isLoading={isLoading} items={items}/>
                <Route path="/contact" component={Contact}/>
            </Router>
        </div>
    )
}

export default App;
