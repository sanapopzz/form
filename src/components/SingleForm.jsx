import { Input, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SingleForm = () => {
    var [input,setinput]=useState({
        value1:'',
        value2:'',
        value3:''
    })
    const inputHandler = (e)=>{
        const {name,value} = e.target 
        setinput({...Input,[name]:value})
    }
  return (
    <div>
      <Typography>{input.value1}</Typography>
      <TextField label='First Name'name='value1'value={input.value1}
      onChange={inputHandler}/>
      <br></br>
      <Typography>{input.value2}</Typography>
      <TextField label='Last' name='value2'value={input.value2}
      onChange={inputHandler}/>
      <br></br>
      <Typography>{input.value3}</Typography>
      <TextField label='Email' name='value3'value={input.value3}
      onChange={inputHandler}/>
    </div>
  )
}

export default SingleForm
