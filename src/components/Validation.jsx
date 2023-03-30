import { Button, TextField,} from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () => {
var[submitted,setSubmitted]=useState(false)
var[inputs,setinputs]=useState({
    fname:''
})
var[Validation,setValidation]=useState({
    fname:''
})
const handleInput =(e)=>{
    const {name,value} =e.target 
    setinputs({...inputs,[name]:value})
    console.log(inputs)
}
const checkValidation =()=>{
    let error =Validation;
    if(!inputs.fname.trim()){
        error.fname="first name is required"
    }else{
        error.fname=""
    }
    setValidation(error)
    }
    
    useEffect(()=>{
        checkValidation()
    })
    
   const handleSubmit = (e)=>{
    e.preventDefault()
    setSubmitted(true)
   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField label='First Name' name='fname' value={inputs.fname}  
        onChange={handleInput}/>
            {(Validation.fname && submitted)&&<p>{Validation.fname}</p>}
        <br/><br/>
        <Button type='submit' variant='contained' color='secondary'>Submit</Button>
      </form>
    </div>
  )
}

export default Validation
