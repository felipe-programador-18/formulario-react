import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
//practice little bit about validation form with yup

const uf = ['RS','RJ','SC','SP']

const FormControll = () => {
  const [ form, setform] = useState({name:'', email:"", uf:'', subscribe:false  })   

  const getAllForm = () => {
      console.log(form)
  }
  
  const OnchangeMore = evt => {
    // this name created went to give parameter insede input   
    const Formfielt = evt.target.name
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value
     setform(curr => {
        return {
            ...curr,
            [Formfielt]: value
        }
      })
    }

 

  
    return (<>
               <h1>Practice More about controlled yup</h1>
              <input type='text' name='name' value={form.name} onChange={OnchangeMore}  />
              
              <input type='email' name='email' value={form.email} onChange={OnchangeMore}  />
              
              <input name='subscribe'  type='checkbox' value={form.subscribe} onChange={OnchangeMore} />
              {form.subscribe && <p>Thanks for subscribe in channel!!</p>}
              
              
              <select name='uf' value={form.uf} onChange={OnchangeMore} >
                   <option>Select Your State: </option> 
                   {uf.map(uf => <option key={uf} value={uf} > {uf} </option>)}
              </select>

           
           <button onClick={getAllForm} >Get Value</button>
           <button onClick={() => setform(curr => !curr)}  >Hide Value</button>
    
    </>)
}


export default FormControll