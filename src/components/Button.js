import React from 'react'

// const Button = ({colour,text}) => <button style={{backgroundColor:colour}} className='btn'>{text}</button> 
const Button = ({colour,text,onClickk}) =>{
    // const clicked=(colour)=>{
    //     console.log(colour)
    // }
    return(
<button 
 style={{backgroundColor:colour}} 
 className='btn' onClick={onClickk}>{text} </button> 

    )
} 


export default Button
