import React from 'react'

// const Button = ({colour,text}) => <button style={{backgroundColor:colour}} className='btn'>{text}</button> 
const Button = ({colour,text}) =>{
    const clicked=(colour)=>{
        console.log(colour)
    }
    return(
<button onClick={()=>clicked(colour)}
 style={{backgroundColor:colour}} 
 className='btn'>{text}</button> 

    )
} 


export default Button
