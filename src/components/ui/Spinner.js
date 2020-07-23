import React from 'react'
import spinner from '../../assets/spinner.svg'

const Spinner = () => {
    return (
        <img className="py-20" src={spinner} 
            style={{ 
                width: '64px', 
                margin: 'auto', 
                display:'block'
            }} 
            alt='Loading'
        />
    )
}

export default Spinner
