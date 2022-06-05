import React, {useState} from 'react'



const uf = ['MG','RS','SC']

// now about controlled form!!!
const controlledFor = () => {
    const [form, setform] = useState({
        name:'',
        email:'',
        uf:'',
        subscribe:false
    })
    
    const getValue = () =>{
       console.log(form) 
    }  
    
    const onChange = event =>{
        const formFielt = event.target.name
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        //now i am set value how object!!
        setform( curr =>{
            return {
                ...curr,
                [formFielt]:value
            }
        })
    
    }

    return ( <>
    <h1>Controlled!</h1>
         Name:
         <input type='text' name='name' value={form.name}  onChange={onChange}  /> <br/>
         Email:
         <input type='text' name='email' value={form.email}  onChange={onChange}  /> <br/>
         Wish receice trending for email:
         <input
          type='checkbox' 
          name='subscribe'
          value={form.subscribe}  
          onChange={onChange}  
          /> <br/>
          {form.subscribe && <p>
              Thanks, for agree your e-mail with us!
              Every week, send you email, trendinds, insight about world of programmers!!
              </p> }
     
        <select name='uf' onChange={onChange}  value={form.uf}>
          <option>select uf:</option>
          { uf.map ( uf => <option value={uf} key={uf} >
               {uf} 
          </option> ) }   
        
        </select>    
        
      <button type='button' onClick={getValue} >get value!</button>
      <button type='button' onClick={() => setshow( curr =>  !curr)} >Hide input!</button>
       <pre> { JSON.stringify(form, null, 2)}</pre>

       {form === 'PJ' && <p>Please adding your date here!</p>}
  </>
    )
}

export default controlledFor