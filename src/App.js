import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Nav from './components/ui/Nav'
import Header from './components/ui/Header'
import ArticleGrid from './components/articles/ArticleGrid'
import Search from './components/ui/Search'


const App = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect (() => {
        const fetchItems = async () => {
            
            const result = await axios (`https://berendkalberg-backend.herokuapp.com/articles?title_contains=${query}`)

            console.log(process.env.REACT_APP_BACKEND_URL)

        //   console.log(result.data)
            setItems(result.data)
            setIsLoading(false)
        }

    fetchItems()
    }, [query])

    return (
        <div>
            <Nav />
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <ArticleGrid isLoading={isLoading} items={items}/>
        </div>
    );
}

export default App;
