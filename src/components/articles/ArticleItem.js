import React from 'react'

const ArticleItem = ({ item }) => {

    return (
        <div className='card'>
            <div className='card-front'>
                <img src={item.thumbnail.url} alt='' />
                <h1>{item.title}</h1>
                <ul>
                    <li>
                        <strong>Gepubliceerd:</strong> {item.published}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ArticleItem
