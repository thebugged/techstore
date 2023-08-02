import React from 'react'
import {Spinner} from 'react-bootstrap'

function Loader ({ color = 'primary'})  {
  return (
    <Spinner 
    animation = 'border'
    role = 'status'
    style = {{
        height: '100px',
        width: '100px',
        margin: 'auto',
        display: 'block',
        color: color,
    }}
    >
        <span className='sr-only'>Loading...</span>
        
        
    </Spinner>
  )
}

export default Loader