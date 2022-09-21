import React from 'react';
import banner from '../../../assets/banner/banner.jpg';
import './Banner.css';

const Banner = () => {
  return (
    // <div className="container mx-auto">
    //   <img src={banner1} />
    // </div>
    <div className=" container text-center">
      <div className="hero banner-photo mx-auto" style={{background:`url(${banner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover'}}>
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-[#003366] p-4 bg-opacity-50">
            <h1 className="text-4xl font-bold text-secondary pb-7">Need any tools?</h1>
            <h1 className="text-5xl font-bold text-white ">Call:  019170000</h1>
            <p className="my-3 text-slate-300 text-2xl font-bold">Your satisfaction our first priority </p>
            <button className="btn rounded-full btn-primary border-4 border-red-600 mb-1 px-20 font-bold"> Buy Now</button>
            
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Banner;