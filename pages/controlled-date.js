import React, {useState} from 'react'



const uf = ['MG','RS','SC']

// now about controlled form!!!
const controlledFor = () => {
    const [form, setform] = useState({
        name:'',
        email:'',
        uf:''
    })
    
    const [show, setshow] = useState(true)
    const getValue = () =>{
       console.log(form) 
    }  
    
    const onChange = event =>{
        const formFielt = event.target.name
        
        //now i am set value how object!!
        setform( curr =>{
            return {
                ...curr,
                [formFielt]: event.target.value
            }
        })
    
    }

    return ( <>
    <h1>Controlled!</h1>
         Name:
         <input type='text' name='name' value={form.name}  onChange={onChange}  /> <br/>
         Email:
         <input type='text' name='email' value={form.email}  onChange={onChange}  /> <br/>
      <button type='button' onClick={getValue} >get value!</button>
      <button type='button' onClick={() => setshow(curr => !curr)} >Hide input!</button>
       <pre> { JSON.stringify(form, null, 2)}</pre>

       {form === 'PJ' && <p>Please adding your date here!</p>}
  </>
    )
}

export default controlledFor