import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Contact from './contact'

import Nav from './components/ui/Nav'
import Header from './components/ui/Header'
import ArticleGrid from './components/articles/ArticleGrid'



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
            <Nav getQuery={(q) => setQuery(q)}/>
            <Header/>
            <ArticleGrid isLoading={isLoading} items={items}/>
            <Contact/>
        </div>
    )
}

export default App;
