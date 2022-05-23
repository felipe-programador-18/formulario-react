import React, {useState} from 'react'
// now about controlled form!!!
const controlledFor = () => {
    const [value, setvalue] = useState('')
    // about value is value inside state, because i am passed it value inside input
    const [show, setshow] = useState(true)
    const getValue = () =>{
       console.log(value) 
    }  
    
    const onChange = event =>{
        
        setvalue(event.target.value)
    }

    return ( <>
    <h1>Controlled!</h1>
        { show && <input type='text' placeholder='Controlled' value={value}  onChange={onChange}  />  }
      <button type='button' onClick={getValue} >get value!</button>
      <button type='button' onClick={() => setshow(curr => !curr)} >Hide input!</button>
     {value}
     {value === "PJ" && <p>Adding your Pj:</p>}
  </>
    )
}

export default controlledFor