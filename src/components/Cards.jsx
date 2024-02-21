import React from 'react'
import { useState } from 'react';

export default function Cards(props) {
  
  const [stock, setstock] = useState(props.stock)
  function panier() {
    setstock(stock-1)
    if (stock>=1) {
      // props.paniermarque.push(props.marque)
      // props.panierprix.push(props.prix)
      
      // console.log(props.paniermarque.length);
      // console.log(props.paniermarque);
      
      // props.setmonpannier((oldArray) => [...oldArray,props.paniermarque ])
      props.setmonpannier([...props.monpannier, props.marque])
      console.log(props.monpannier);
      
      
    }
    if (stock<=0) {
      setstock(0)
    }
    
  }

  

  return (
    <div className={`card w-60  shadow-xl  hover:bg-[#DCA54C]/35 hover:text-black hover:border-[1px] hover:border-[#DCA54C]/35 ${stock == 1 ? "bg-orange-600" : stock == 0 ? "bg-red-600":"bg-base-100"} `}>
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
