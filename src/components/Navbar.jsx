import React from 'react'

export default function Navbar(props) {
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
                    <img src={props.sac} width="60%" alt="" /><span className="badge badge-sm indicator-item">4</span>
                    </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
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
