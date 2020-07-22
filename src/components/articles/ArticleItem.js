import React from 'react'

const ArticleItem = ({ item }) => {

    return (

        <div className="lg:w-3/4 sm:w-3/4 md:w-1/2 lg:flex mx-auto shadow-lg mb-20">
            <div className="border-r border-l border-t rounded-t border-gray-400 lg:border-t lg:border-r-0 lg:border-b lg:rounded-t-none lg:rounded-l lg:border-gray-400 bg-white p-4">
                <div className="lg:h-48 lg:w-48 sm:w-48 sm:mx-auto flex-none bg-cover rounded  text-center overflow-hidden">
                    <a href="#">
                        <img src={item.thumbnail.url} alt='thumbnail'/>
                    </a>
                </div>
            </div>
            
            <div className="border-r border-b border-l w-full border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold mb-2">{item.title}</div>
                </div>
                <div className="mb-8">
                    <div className="text-gray-800 mb-2">{item.content}</div>
                </div>
                <div className="flex items-center">
                    <div className="">
                        <p className="text-gray-600 text-xs"><span className="text-xs font-bold">Gebubliceerd op: </span>{item.published}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ArticleItem
