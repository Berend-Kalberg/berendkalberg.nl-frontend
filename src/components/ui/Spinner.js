import React from 'react'
import spinner from '../../assets/spinner.svg'

const Spinner = () => {
    return (
        <img src={spinner} 
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
