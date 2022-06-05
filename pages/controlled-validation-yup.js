import React, {useState, useEffect} from 'react'
import * as yup from 'yup'


const uf = ['MG','RS','SC']

//yet getting verify object
const schema = yup.object().shape({
  name: yup.string().required("Please fielt fill"),
  email: yup.string().required('Please fielt fill').email('email is validated fielt')  
})


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
     
    const [statusRevalidate, sethaserror] = useState(false)
    const [errors, setmorerros] = useState({})
    useEffect(() => {
       const validation = async () => { 
       const statusRevalidate = await schema.isValid(form)
       sethaserror(statusRevalidate)
       try {
        await schema.validate(form, {abortEarly:false})
        setmorerros({})
       } catch (error) {
        // remerber some thins here is called explore dates api!!
        const errors = error.inner.reduce((prev, curr) => ({...prev, [curr.path]: curr.message }) ,{} )
        setmorerros(errors)
       }
       }
       validation()
    },[form])


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
         {errors.name && <p> {errors.name} </p> }
         Email:
         <input type='email' name='email' value={form.email}  onChange={onChange}  /> <br/>
         {errors.email && <p> {errors.email} </p>  }

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
        
      <button type='button' onClick={getValue}  >get value!</button>
      <button type='button' onClick={() => setform( curr =>  !curr)} >Hide input!</button>
       <pre> { JSON.stringify(form, null, 2)}</pre>

       {form === 'PJ' && <p>Please adding your date here!</p>}
  </>
    )
}

export default controlledFor