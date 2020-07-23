import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import Spinner from '../ui/Spinner'


const ItemDetail = ( {match} ) => {


    
    useEffect(() => {
        fetchItem()
    }, [])

    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://berendkalberg-backend.herokuapp.com/articles?slug_eq=${
                match.params.slug
            }`
        )
        const item = await fetchItem.json()
        setItem(item)
        setIsLoading(false)
    }
    
    return isLoading ? (

    <Spinner /> 
    ) : (
    <div className="mx-auto container pt-20 px-4">
        <h1 className="font-bold">{item[0].title}</h1>
        <br></br>
        <div className="markdown">
            <ReactMarkdown source={item[0].content}/>
        </div>
        
    </div>)

    

}


export default ItemDetail
