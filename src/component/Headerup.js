import React from 'react'

export default function Headerup() {
  return (
    <>
     <div className="container-fluid" style={{display:"flex", backgroundColor:"#f1c40f"}}>
        <a style={{marginTop:"10px", marginRight:"20px", textDecoration:"none", color:"#011e40",marginLeft:"100px"}} href="9579235637"><i class="fa-solid fa-phone"></i>9579235637</a>
        <a style={{marginTop:"10px", textDecoration:"none", color:"#011e40"}} href="mailto:info@learapress.com"><i class="fa-regular fa-envelope"></i> info@learapress.com</a>

        <div className="social-profile ms-auto" style={{display:"flex", marginTop:"10px"}}>
            <span>follow us</span>
            <ul>
                <li style={{listStyle:"none"}}>
                    <a style={{color:"#011e40"}} href="https://www.facebook.com/" rel="noopener noreferrer"> <i class="fa-brands fa-facebook-f"></i> </a>
                </li>
            </ul>
            <ul>
                <li style={{listStyle:"none"}}>
                    <a style={{color:"#011e40"}} href="https://twitter.com/" rel="noopener noreferrer"> <i class="fa-brands fa-twitter"></i> </a> 
                </li>
            </ul>
            <ul>
                <li style={{listStyle:"none"}}>
                    <a style={{color:"#011e40"}} href="https://www.linkedin.com/" rel="noopener noreferrer"> <i class="fa-brands fa-linkedin"></i> </a>
                </li>
            </ul>
            <ul>
                <li style={{listStyle:"none"}}>
                    <a style={{color:"#011e40   "}} href="https://www.skype.com/en/" rel="noopener noreferrer"> <i class="fa-brands fa-skype"></i> </a>
                </li>
            </ul>
        </div>
     </div>
    </>
  )
}
