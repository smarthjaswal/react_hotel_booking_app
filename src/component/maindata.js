import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Content from './content'
import Corosal from './corosal'

function Maindata() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='d-flex'>
                <div style={{ width: "18%", height: "100%", position: "fixed" }}>
                    <Sidebar />
                </div>

                <div className='container-fluid' style={{ height: "auto", width: "100%", marginTop: "56px", backgroundColor: "aqua", marginLeft: "18%" }}>
                    <div className='corusul'>
                        <Corosal />
                    </div>
                    <div>
                        <Content />
                    </div>


                </div>
            </div >
        </div >
    )
}

export default Maindata