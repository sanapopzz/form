import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SampleForm = () => {
    var[input,setinput] = useState();
    const inputhandle=(event)=>{
        setinput(event.target.value)
        console.log(input)
    }
    var[a,b] =useState();
    const input1=(event)=>{
        b(event.target.value)
        console.log(input)
    }
  return (
    <div>
    <Typography>{input}</Typography>
    <TextField variant='outlined' label='first name' onChange={inputhandle}/>
    <br></br>
    
    <Typography>{a}</Typography>
    <TextField variant='outlined' label='second name' onChange={input1}/>
    <br></br>
    <Button variant='contained'>submit</Button>

    </div>
  )
}

export default SampleForm
