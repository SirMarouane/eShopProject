import React from 'react'

export default function Cards(props) {
  return (
    <div className="card w-60 bg-base-100 shadow-xl hover:bg-[#DCA54C]/35 hover:text-black hover:border-[1px] hover:border-[#DCA54C]/35 ">
        <figure className="">
            <img src={props.img} alt="" className="rounded-xl "/>
        </figure>
        <div className="card-body items-center text-center pb-2 ">
            <h2 className="card-title">Richard Mille </h2>
            <p>model 44CBR</p>
            <p>prix</p>
            <p className='text-white'>stock</p>

            <div className="card-actions ">
            <button className="btn btn-active w-56">buy</button>
            </div>
        </div>
  </div>
  )
}
