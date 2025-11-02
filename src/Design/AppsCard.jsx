import React from 'react';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'

const AppsCard = ({app}) => {
    const {image,title,ratingAvg,downloads}=app;

    return (
        <div className=''>
    <div className=" h-full bg-base-100 w-full rounded-xl shadow-sm overflow-hidden
        hover:scale-105 transition ease-in-out">
  <figure className="px-4 flex w-full justify-center pt-5  ">
    <img className="rounded-xl h-full object-cover  "
      src={image}
      alt="None"
       />
  </figure>
  <div className="pb-6 px-5 ">
    <h2 className="font-bold text-2xl text-center my-5">{title}</h2>
  <div className='flex justify-between '>
    <h2 className='btn rounded-xl text-green-600'>
      <img className='h-4' src={download} alt="" />{downloads}</h2>
    <h2 className='btn rounded-2xl  text-amber-600'>
        <img className='h-4' src={rating} alt="" />{ratingAvg}</h2>
  </div>
  </div>
</div>
        </div>
    );
};

export default AppsCard;