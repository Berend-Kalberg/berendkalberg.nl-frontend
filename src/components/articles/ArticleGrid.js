import React from 'react'
import ArticleItem from './ArticleItem'
import Spinner from '../ui/Spinner'

const ArticleGrid = ({ items, isLoading}) => {

    
    return isLoading ? (
    <Spinner />
    ) : (
    <section id="blog" className="pt-20">
        {items.map(item =>(
            <ArticleItem key={item.id} item={item}></ArticleItem>
        ))}
    </section>)
}

export default ArticleGrid
