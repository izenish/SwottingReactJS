// import React from 'react'  -> used to be required
import PropTypes from 'prop-types'
import Button from './Button'

const Headers = ({title,onAdd,show}) => {
    return (
        <header className='header'>
            <h1>Task Tracker {title}</h1>
            <Button colour={show?"red":"#16a085"} text={show?"Close":"Add"} onClickk={onAdd}/>
            {/* <Button colour="#f1c40f" text="Await"/>
            <Button colour="#c0392b" text="Stop"/> */}

        </header>
    )
}

// We can also default props in this way
Headers.defaultProps={
    title:"Version Unspecified"
}

Headers.propTypes={
    title:PropTypes.string,
}
export default Headers
