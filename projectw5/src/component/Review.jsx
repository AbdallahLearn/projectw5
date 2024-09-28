import React from 'react'

function Review(props) {
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 ">
  <figure>
    <img
      src={props.img}
      alt='' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{props.title}</h2>
    <p className='text-gray-400'>{props.desc}</p>
    <div className="card-actions justify-end">
      <button className="me-auto  text-[#b48484] text-xs mt-5" >READ MORE -  </button>
    </div>
  </div>
</div>
    </>
  )
}

export default Review
