import React from "react";

function Join() {
  return (
    <>
      <div className="card lg:card-side w-[90%] m-auto relative bottom-44 bg-white rounded-none" style={{border: '10px solid #e0e0e0'}}>
        <figure className="relative lg:bottom-10 left-5 max-md:left-0 max-sm:left-0 bottom-10">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body mt-20 ms-10">
          <h2 className="card-title text-5xl ">Join Mailing List</h2>
          <p className="text-gray-400 font-normal text-lg w-[70%]">Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.</p>
          <div className="card-actions justify-around">
            <input className="w-[60%] bg-[#fafafa] font-normal " style={{padding:'15px 20px', border:'1px solid black'}} type="text"  placeholder="Email Address"/>
            <button className="btn btn-primary w-[30%] bg-white text-[#d3a79b] hover:bg-[#d3a79b] hover:text-white rounded-none" style={{border:'1px solid #d3a79b'}}>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
