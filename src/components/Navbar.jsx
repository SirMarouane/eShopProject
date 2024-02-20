import React from 'react'

export default function Navbar(props) {
  return (
    <div className='pb-10'>

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img src={props.Logo} width="30%" alt="" />
            </div>
            
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl"><span className="text-amber-500">Charlton</span> Luxury Watches</a>
            </div>
            <div className="navbar-end">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                   <img src={props.sac} width="60%" alt="" />
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content dropdown-open mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Panier</a></li>
                
                </ul>
                </div>
                
            </div>
        </div>

    </div>
  )
}
