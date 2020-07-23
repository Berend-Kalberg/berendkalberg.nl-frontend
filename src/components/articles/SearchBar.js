import React, { useState } from 'react'

const SearchBar = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
            <div className="lg:p-4  px-0 block border hover:border-indigo-400 my-20 mx-10 rounded-lg">
                <input type="search" value={text} name="search" onChange={(e) => onChange(e.target.value)} placeholder="Zoeken" className="w-full lg:p-4 py-3 px-1 rounded-lg"/>
            </div>
    )
}

export default SearchBar
