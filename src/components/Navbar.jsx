import React from 'react'

export default function Navbar(props) {
  return (
    <div>

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Panier</a></li>
                    <li><a>About</a></li>
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl"><span className="text-amber-500">Charlton</span> Luxury Watches</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                <img src={props.sac} width="20px" alt="" />
                  </button>
                
            </div>
        </div>

    </div>
  )
}
