import React from 'react'
import { Link } from 'react-router-dom'

const ArticleItem = ({ item }) => {

    const all = item.categories
    const result = all.map(a => a.name)
   
    return (

        <div className="lg:w-3/4 sm:w-3/4 md:w-1/2 lg:flex mx-auto mt-20 shadow-lg">
            <div className="border-r border-l border-t rounded-t border-gray-400 lg:border-t lg:border-r-0 lg:border-b lg:rounded-t-none lg:rounded-l lg:border-gray-400 bg-white p-4">
                <div className="lg:h-48 lg:w-48 sm:w-48 sm:mx-auto flex-none bg-cover rounded  text-center overflow-hidden">
                    <Link to={`/blog/${item.slug}`}>
                        <img src={item.thumbnail.url} alt='thumbnail'/>
                    </Link>
                </div>
            </div>
            
            <div className="border-r border-b border-l w-full border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <h2 className="text-gray-800 text-xl mb-2">{item.title}</h2>
                </div>
                <div className="">
                    <p className="text-gray-600 text-xs">Gepubliceerd op: <span className="text-orange-500 text-xs">{item.published}</span></p>
                    <div className="flex">
                    <p className="text-gray-600 text-xs">Categorieën:</p>
                        <div className="flex">
                            {result.map((category) => (
                                <p className="text-blue-500 text-xs pl-1" key={category}>{category}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ArticleItem
