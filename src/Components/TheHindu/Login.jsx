import React from 'react'
import "./Login.css"
export default function Login() {
  function makealert(){
       alert("Subscribe!")
  }
  return (
    
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap: "88px",boxShadow: "gray 0px 6px 7px 0px"}}>
    
        <div style={{display:"flex",gap:"22px"}}>
        <img src="https://www.thehindu.com/theme/images/th-online/h-circle-black-white-new.svg" alt="" width={"55"} className="falling-image"/>
            <p style={{marginTop:"none !important"}} >EPAPER/MUSIC </p>
        </div>
     <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"12px"}} >
        <div style={{display:"flex",justifyContent:"center"}}> 
        <img src="https://www.thehindu.com/theme/images/th-online/h-circle-yellow-new.svg" alt="" style={{width:"25px",height:"25px"}} />
        <p style={{fontWeight:"bold"}}> Free Trial</p>
        </div>
        <div className='btn'>
           <button className='btn-back' onClick={makealert}>Subscribe</button>
        </div>
        <div className='btn'>
        <button className='btn-back'>Login</button>
        </div>
    </div>
    </div>
  )
}
