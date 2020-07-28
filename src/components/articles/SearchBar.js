import React, { useState } from 'react'
import {DebounceInput} from 'react-debounce-input'

const SearchBar = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <div className="px-0 block border hover:border-indigo-400 my-20 mx-10 rounded-lg">
            <DebounceInput minLength={1} debounceTimeout={1000}type="search" value={text} name="search" onChange={(e) => onChange(e.target.value)} placeholder="Zoeken" className="w-full lg:p-4 py-3 px-1 rounded-lg"/>
        </div>
    )
}

export default SearchBar
