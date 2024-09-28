import React from "react";

function Join() {
  return (
    <>
      <div className="card lg:card-side w-[85%] m-auto relative bottom-44 bg-white rounded-none max-sm:w-[90%] bottom-16" style={{border: '10px solid #e0e0e0'}}>
        <figure className="relative lg:bottom-10 left-5 max-md:left-0 max-sm:left-0 bottom-10">
          <img
            className="max-sm:w-[90%]"
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body mt-20 ms-10 max-sm:ms-0 mt-0">
          <h2 className="card-title text-5xl max-sm:text-[28px]">Join Mailing List</h2>
          <p className="text-gray-400 font-normal text-lg w-[70%] max-sm:w-full">Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.</p>
          <div className="card-actions justify-around max-sm:flex-col">
            <input className="w-[60%] bg-[#fafafa] font-normal max-sm:w-[100%] " style={{padding:'15px 20px', border:'1px solid rgba(0,0,0,0.1'}} type="text"  placeholder="Email Address"/>
            <button className="btn btn-primary w-[30%] bg-white text-[#d3a79b] hover:bg-[#d3a79b] hover:text-white rounded-none max-sm:w-full" style={{border:'1px solid #d3a79b'}}>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
