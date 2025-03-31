import React from 'react'
import './Materials.css'
const Materials = () => {
  return (
    <div 
        className='Entire_Mat'
     >
                <div className='MatBlock'>
                    <div className='matFlex' >
                            <div className='mat_First'>
                                <div className="helloContainer">
                                <h2 className="helloText">MATERIALS</h2>
                                <hr className="helloHover" />
                                </div>
                                <h4>BATTERY MATERIALS</h4>
                                <p>At GODI, we are working on unique materials and new cell chemistries for next-generation batteries to bring down the cost by 25-35% per kWh. At the same time, we are committed to the ethical sourcing of materials with minimal environmental impact.</p>
                                <p>Technological innovations drive GODI to engineer the crucial components of batteries: anode, cathode, and electrolyte to produce high energy/power density batteries. These electrode materials enhance the volumetric/gravimetric energy density of the batteries and efficient in extending the cycle life. Moreover, our exclusive electrolyte compositions along with novel solid-state electrolytes facilitate wide temperature range operation of the batteries with enhanced safety.</p>
                            </div>
                            <div className='mat_Second'>
                                <div className='materialOne'><img src='https://www.godienergy.com/img/materials/materials1.1.png' /></div>
                                
                            </div>
                    </div>
                    <div className='BottomMat'>
                        <div className='BottomOne' >
                            <img  className="Bottom_img" src='https://www.godienergy.com/img/materials/materials-supercapacitor.svg' />
                            
                        </div>
                        <div className='BottomTwo' style={{}}>
                            <h4>SUPERCAPACITOR MATERIALS </h4>
                            <p>We are working with abundantly available bio-waste derived activated carbon with unique cell chemistry to meet our advanced Supercapacitor and Hybrid Capacitor product portfolio.</p>       
                        </div>
                    </div>

                </div>



    </div>
  )
}

export default Materials
