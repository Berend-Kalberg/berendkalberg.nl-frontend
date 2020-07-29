import React, { useState } from 'react'
import {DebounceInput} from 'react-debounce-input'

const SearchBar = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <div className="px-0 lg:w-3/4 sm:w-3/4 md:w-1/2 lg:flex mx-auto block border hover:border-indigo-400 mt-20 rounded-lg">
            <DebounceInput minLength={1} debounceTimeout={1000}type="search" value={text} name="search" onChange={(e) => onChange(e.target.value)} placeholder="Zoeken door alle blogposts" className="w-full lg:p-4 py-3 px-1 rounded-lg"/>
        </div>
    )
}

export default SearchBar
