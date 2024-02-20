import React from 'react'

export default function Cards(props) {
  return (
    <div className="card w-60 bg-base-100 shadow-xl hover:bg-[#DCA54C]/55 hover:text-black hover:border-[1px] hover:border-[#DCA54C]/35 ">
        <figure className="">
            <img src={props.img} alt="" className="rounded-xl "/>
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Richard Mille </h2>
            <p>model 44CBR</p>

            <div className="card-actions">
            <button className="btn btn-active">Default</button>
            </div>
        </div>
  </div>
  )
}
