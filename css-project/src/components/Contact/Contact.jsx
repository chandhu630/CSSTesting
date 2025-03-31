import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div >
        <div className="contactWrapper">
                <div className='mainContact' style={{display:"flex"}}>
                    <div className='firstHalf_Hello' >
                        <div className="helloContainer">
                        <h2 className="helloText">HELLO!</h2>
                        <hr className="helloHover" />
                        </div>
                        <form style={{padding:"20px"}} className='Fields_Flex'>
                            <input className='fields' type='name' placeholder='Your Name: *' />
                            <input className='fields' type='Email' placeholder='Email: *' />
                            <textarea className='fields_message'  placeholder="I 'd like to know about ..." />
                            <button className='button-btn'>Submit</button>
                        </form>

                    </div>
                    <div className='secondContact'  >
                        <div className="helloContainer">
                        <h2 className="helloText">ADDRESS</h2>
                        <hr className="helloHover" />
                        </div>
                        <p className='letter_india'>INDIA</p>
                        <p>
                            <a
                                href="https://www.google.com/maps/place/Godi+India+Private+Limited./@17.2430667,78.4749952,19z/data=!3m1!4b1!4m6!3m5!1s0x3bcb90d4a7a416d7:0x8d9a0ce1f44aea2c!8m2!3d17.2430667!4d78.4749952!16s%2Fg%2F11jj7402cn?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
                                className="address-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                src="https://www.godienergy.com/img/hello/location.svg"
                                alt="location"
                                className="address-icon"
                                />
                                <span className='underLineContact'>
                                12(p), 13, 14(p), Road No:2, Hardware Park, Hyderabad – 500005
                                </span>
                            </a>
                        </p>     
                        <p>
                            <a
                                href="https://www.google.com/maps/place/Godi+India+Private+Limited./@17.2430667,78.4749952,19z/data=!3m1!4b1!4m6!3m5!1s0x3bcb90d4a7a416d7:0x8d9a0ce1f44aea2c!8m2!3d17.2430667!4d78.4749952!16s%2Fg%2F11jj7402cn?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
                                className="address-link"
                            >
                                <img
                                src="https://www.godienergy.com/img/hello/email.svg"
                                alt="mail"
                                className="address-icon"
                                />
                                <span className='underLineContact'>
                                hello@godienergy.com
                                </span>
                            </a>
                        </p>     
                        {/* <h1>Product Enquiry</h1> */}
                        <div className="helloContainer">
                        <h2 className="helloText">PRODUCT ENQUIRY</h2>
                        <hr className="helloHover" />
                        </div>
                        <br></br>
                        <button style={{marginTop:"15px"}} className='btn-enquiry'>Enquiry Now</button>

                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Contact
