import React, { useState } from 'react';
function Button({color="green"}){
    const changeBg=()=>{
       document.body.style.backgroundColor = color; 
    }
    
    return(
        <button type="button" onClick={changeBg} style={{backgroundColor:color}} className='text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2'>{color}</button>

    )
   
}

export default Button