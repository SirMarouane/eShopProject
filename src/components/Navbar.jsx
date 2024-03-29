import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';


export default function Navbar(props) {
    const [hidden , sethidden ] = useState("")
    function hide() {
        sethidden("hidden")
    }
    
  return (
    <div className='pb-10 w-full'>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img src={props.Logo} width="30%" alt="" />
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl"><span className="text-amber-500">Charlton</span> Luxury Watches</a>
            </div>
            <div className="navbar-end">
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <img src={props.sac} width="60%" alt=""/><span className="badge badge-sm indicator-item">{props.monpannier.length}</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{props.monpannier.length} Items</span>
                            <span className="text-info">Subtotal:</span>
                            <div className="card-actions "> 
                                {
                                    props.monpannier.map((element,id)=>{   
                                        return (
                                            <button onClick={()=>{hide()}} className={`btn btn-primary btn-block h-[65px] ${hidden}`}>
                                            <h1>{props.brand[id]} {props.monpannier[id]}</h1> 
                                            <p className=' text-red-600'>{props.cout[id]}$</p>  
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            </div>
        </div>
    </div>
  )
}
