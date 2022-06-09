import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
//practice little bit about validation form with yup

const uf = ['RS','RJ','SC','SP']

// this validation about form
const schema = yup.object().shape({
    name: yup.string().required('Please fielt fill'),
    email: yup.string().required('Please fielt fill').email('emial is fielt validated!')
})


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
    
    const [statusVal,  setmoreerros ] = useState(false)
    const [error, seterros] = useState({}) 
    useEffect(() => {
       const validation = async () => {
       // this statusval is await to valed form    
       const statusVal = await schema.isValid(form)
       setmoreerros(statusVal)
       try {
           // thought about solutions !!!
           await schema.validate(form, { abortEarly: false})
           seterros({})
        } catch (err){
          // remerber some thins here is called explore dates api!!
         const verifyerros = err.inner.reduce((prev, curr) => ({...prev,[curr.path]: curr.message }), {})
         console.log(verifyerros)   
        }

       } 
      
       validation()   
    },[form])


     

  
    return (<>
               <h1>Practice More about controlled yup</h1>
              <input type='text' name='name' value={form.name} onChange={OnchangeMore}  />
              {error.name && <p> {error.name} </p> }

              <input type='email' name='email' value={form.email} onChange={OnchangeMore}  />
              
              {error.email && <p> {error.email} </p> }
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