import React from 'react'

const ArticleItem = ({ item }) => {

    console.log(item)

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.thumbnail.url} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.title}</h1>
                    <ul>
                        <li>
                            <strong>Gepubliceerd:</strong> {item.published}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ArticleItem
