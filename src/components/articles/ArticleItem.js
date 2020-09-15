import React from 'react'
import { Link } from 'react-router-dom'

const ArticleItem = ({ item }) => {

    const all = item.categories
    const result = all.map(a => a.name)

    var publishedDate =item.published;


    const d = new Date(publishedDate)
    const year = d.getFullYear()
    const date = d.getDate()
   
    const months = {
        0: 'januari',
        1: 'februari',
        2: 'maart',
        3: 'april',
        4: 'mei',
        5: 'juni',
        6: 'juli',
        7: 'augustus',
        8: 'september',
        9: 'oktober',
        10: 'november',
        11: 'december'
    }

    const monthName = months[d.getMonth()]

    const days = [
        'Zo',
        'Ma',
        'Di',
        'Wo',
        'Do',
        'Vri',
        'Zat'
    ]

    const dayName = days[d.getDay()]

    const formatted = `${dayName}, ${date} ${monthName} ${year}`
    
    return (

        <div className="lg:w-3/4 sm:w-3/4 md:w-1/2 lg:flex mx-auto my-20 shadow-lg">
            <div className="border-r border-l border-t rounded-t border-gray-400 lg:border-t lg:border-r-0 lg:border-b lg:rounded-t-none lg:rounded-l lg:border-gray-400 bg-white p-4">
                <div className="fit-thumbnail lg:w-48 sm:w-48 sm:mx-auto align-middle flex-none bg-cover rounded text-center overflow-hidden">
                    <Link to={`/blog/${item.slug}`}>
                        <img src={item.thumbnail.url} alt='thumbnail'/>
                    </Link>
                </div>
            </div>
            
            <div className="border-r border-b border-l w-full border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <Link to={`/blog/${item.slug}`}>
                        <h2 className="text-gray-800 text-xl mb-2">{item.title}</h2>
                    </Link>
                </div>
                <div>
                    <p className="fit-content text-orange-500 bg-orange-100 text-xs p-2 mb-2 rounded-lg">{formatted}</p>
                    <div className="flex overflow-scroll scroll-hidden">
                        {result.map((category) => (
                            <p className="text-blue-500 text-xs bg-blue-100 p-2 mr-1 rounded-lg" key={category}>{category}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ArticleItem
