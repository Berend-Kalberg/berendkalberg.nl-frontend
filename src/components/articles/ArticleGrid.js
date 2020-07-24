import React, {useState, useEffect} from 'react'
import axios from 'axios'

import ArticleItem from './ArticleItem'
import SearchBar from './SearchBar'
import Spinner from '../ui/Spinner'

const ArticleGrid = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [query, setQuery] = useState('')

    console.log('hi')
    
    useEffect (() => {
        const fetchItems = async () => {
            
            const result = await axios (`https://berendkalberg-backend.herokuapp.com/articles?title_contains=${query}`)

            setItems(result.data)
            setIsLoading(false)
        }

    fetchItems()
    }, [query])
    
    return isLoading ? (
    <Spinner /> 
    ) : (
    <div className="pt-20">
        <h1>Blog Page</h1>
        <SearchBar getQuery={(q) => setQuery(q)}/>
        {items.map(item =>(
            <ArticleItem key={item.id} item={item}></ArticleItem>
        ))}
    </div>)

   
}

export default ArticleGrid
