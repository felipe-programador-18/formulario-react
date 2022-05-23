import React,{useRef, useState} from 'react'
//get started learning about uncontrolled!!
const Formuncontrolled = () => {
  const Reffered = useRef()
  const [show, setshow] = useState(true)

  const getValue = () =>{
      console.log(Reffered.current.value) 
  }
  return (<>
      <h1>uncontrolled:!</h1>
        { show && <input type='text' placeholder='uncontrolled'  ref={Reffered} /> }
      <button type='button' onClick={getValue} >get value!</button>
  </>
  )
}

export default Formuncontrolled