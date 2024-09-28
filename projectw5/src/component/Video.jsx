import React from 'react'

function Video() {
  return (
    <>
      <div className="card lg:card-side ">
        <div className="img-text w-[40%] max-md:w-full  max-sm:w-full ">
        <figure className='bg-slate-700'>
    <img
      src="https://i.pinimg.com/564x/39/35/d8/3935d8e0a9ea12ddc2023e794e9ee92d.jpg"
      alt="Album" />
  </figure>
  <h2 className='text-2xl w-[90%]'>Dianna Adams visits the Sooto Restaurant | Uncovered Miami</h2>
  <p className=' mt-5 w-[90%] text-gray-400 font-normal'>A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus placerat</p>

        </div>
  
  <div className="card-body ms-5 max-sm:ms-0">
    <div className="img-text-side flex justify-between">
        <div className="img">
            <img className='max-sm:w-96' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg" alt="" />
        </div>
        <div className="text ms-5">
        <h2 className="card-title">Family Dinner - Latea pulvinar scelerisque diam tempus facilisi</h2>
        <p className='text-gray-400 font-normal'>Enim imperdiet fames nisl, purus et diam aliquet</p>
        </div>  
    </div>
    <div className="img-text-side flex mt-10">
        <div className="img">
            <img className='max-sm:w-96' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg" alt="" />
        </div>
        <div className="text ms-5">
        <h2 className="card-title">Lobortis turpis turpis vehicula laoreet egestas enim ornare</h2>
        <p className='text-gray-400 font-normal'>Enim imperdiet fames nisl, purus et diam aliquet</p>
        </div>  
    </div>
    <div className="img-text-side flex mt-10">
        <div className="img">
            <img className='max-sm:w-96' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg" alt="" />
        </div>
        <div className="text ms-5">
        <h2 className="card-title">Tempus quis ac viverra condimentum sit nulla viverra</h2>
        <p className='text-gray-400 font-normal'>Enim imperdiet fames nisl, purus et diam aliquet</p>
        </div>  
    </div>
    <div className="img-text-side flex mt-10">
        <div className="img">
            <img className='max-sm:w-96' src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg" alt="" />
        </div>
        <div className="text ms-5">
        <h2 className="card-title">Quis mauris egestas enim urna dictum</h2>
        <p className='text-gray-400 font-normal'>Enim imperdiet fames nisl, purus et diam aliquet</p>
        </div>  
    </div>
    
    <div className="card-actions justify-end mt-10">
      <button className="btn btn-primary w-full rounded-none hover:bg-[#d3a79b] hover:text-white bg-white text-[#d3a79b]" style={{border: '1px solid #d3a79b'}}>Listen</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Video
