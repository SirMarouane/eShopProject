import React from 'react'
import { useState } from 'react';

export default function Cards(props) {
  const [chose, setchose] = useState("")
  let paniermarque = []
  let panierprix = []
  
  const [stock, setstock] = useState(props.stock)
  function panier(params) {
    setchose("ewa")
    paniermarque.push(props.marque)
    panierprix.push(props.prix)
    console.log(chose);
    console.log(paniermarque);
    console.log(panierprix);
    setstock(stock-1)
    console.log(stock);

  }

  return (
    <div className="card w-60 bg-base-100 shadow-xl hover:bg-[#DCA54C]/35 hover:text-black hover:border-[1px] hover:border-[#DCA54C]/35 ">
        <figure className="">
            <img src={props.img} alt="" className="rounded-xl "/>
        </figure>
        <div className="card-body items-center text-center pb-2 ">
            <h2 className="card-title">{props.nom}</h2>
            <p>{props.marque}</p>
            <p>price:  {props.prix}$</p>
            <p className='text-white'>stock : {stock}</p>

            <div className="card-actions">
            <button onClick={()=>{panier()}} className="btn btn-active w-56">buy</button>
            </div>
        </div>
  </div>
  )
}
