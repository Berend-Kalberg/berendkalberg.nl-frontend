import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import Spinner from '../ui/Spinner'

const ItemDetail = ( {match} ) => {

    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({
    })
    const [isLoading, setIsLoading] = useState(true)

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://berendkalberg-backend.herokuapp.com/articles?slug_eq=${
                match.params.slug
            }`
           
        ) 
        .catch((error) => {
            console.error('Error:', error)
        })

        const item = await fetchItem.json()

        const fakeItem = [{
            content: "",
            id: "",
            published: "",
            title: "Deze pagina bestaat niet",
        }]

        if (item.length === 0) {
            setItem(fakeItem)
        } else {
            setItem(item)
        }
        setIsLoading(false)
    }
    
    return isLoading ? (

    <Spinner /> 
    ) : (
    <div className="mx-auto container pt-20 px-4" target="_blank">
        <div className="markdown">
            <ReactMarkdown source={item[0].content}/>
        </div>
    </div>)
}


export default ItemDetail
