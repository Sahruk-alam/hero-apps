import React from 'react';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
const AppsCard = ({app}) => {
    const {image,title,ratingAvg,downloads}=app
    return (
        <div className='mb-3'>
            <div className="card bg-base-100 w-75 shadow-sm">
  <figure className="px-4 pt-4">
    <img
      src={image}
      alt="None"
      className="rounded-xl h-full" />
  </figure>
  <div className="pb-6 px-5 ">
    <h2 className="font-bold text-center my-5">{title}</h2>
  <div className='flex justify-between '>
    <h2 className='btn rounded-xl text-green-600'><img className='h-4' src={download} alt="" />{downloads}</h2>
    <h2 className='btn rounded-2xl  text-amber-600'>
        <img className='h-4' src={rating} alt="" />{ratingAvg}</h2>
  </div>
  </div>
</div>
        </div>
    );
};

export default AppsCard;