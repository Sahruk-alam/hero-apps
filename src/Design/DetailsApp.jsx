import React, { useEffect, useState } from 'react';
import useApp from '../component/Hook/jsonHook';
import { useParams } from 'react-router';
import iconRating from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import iconDownload from '../assets/icon-downloads.png'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line,
      Tooltip,ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';
import { FcApproval } from "react-icons/fc";
import AppError from './AppError';
import AnimationLoading from '../component/Hook/AnimationLoading';

const DetailsApp = () => {
 const [installed,setInstalled]=useState(false)
    const {id}=useParams()
    const {apps,loading}=useApp();
 const app=apps.find(p=>String(p.id)===id) 
    useEffect(() => {
  if (!app) return;
  const installedApps = JSON.parse(localStorage.getItem("Selected")) || [];
  setInstalled(installedApps.some(p => p.id === app.id));
}, [app]);

    if(loading) return <AnimationLoading/>

   if (!app) {
    return <AppError />;
    }

    const {image,title,downloads,description,companyName,ratings,
        ratingAvg,reviews,size}=app ;
    // console.log(app)
   
const reversedRatings = [...ratings].reverse();

const handleInstall=()=>{
  setInstalled(true)
    toast(<><FcApproval /> Yahoo {title} installed successfully!</>)
  const installedApps = JSON.parse(localStorage.getItem("Selected")) || [];
  const already = installedApps.some(p => p.id === app.id);

  if (!already) {
    installedApps.push(app);
    localStorage.setItem("Selected", JSON.stringify(installedApps));
  }

}
  const handleSelected=()=>{
  const list =JSON.parse(localStorage.getItem('Selected'))
 let updateData=[];
  if(list){
    const isDuplicate=list.some(p=>p.id===app.id)
    if(isDuplicate) return alert('Already set data')
    updateData=[...list,app]
  }
  else{
    updateData.push(app)
  }
  localStorage.setItem('Selected',JSON.stringify(updateData))
 }
const handleInstallAndSelect = () => {
    if (installed) return
    handleSelected()
    handleInstall()
  }
    return (
 <div className='bg-gray-100 px-6 md:px-20 min-h-screen '>
  <title>{title}</title>
       <div className="">
    <div className="card md:card-side  mt-10 md:px-12 shadow-sm">
  <figure>
    <img className="rounded-xl w-64 h-64 object-cover"
      src={image}
      alt={title} />
  </figure>
  <div className="md:ml-25 mt-7 md:mt-0 ">
    <h2 className="font-bold text-4xl">{title}</h2>
    <p className='text-2xl my-2.5 text-gray-600'>{companyName}</p>
    <hr className='my-3' />

    <div className='flex my-5 gap-9'>
      <div>
      <img className='h-10 ' src={iconDownload} alt="Download Icon" />
      <p>Download</p>
      <h3 className="text-2xl font-bold">{downloads}</h3>
    </div>
    <div>
      <img className='h-10' src={iconRating} alt="Rating Icon" />
      <p>Average Rating</p>
      <h3 className="text-2xl font-bold">{ratingAvg}</h3>
    </div>
    <div>
      <img className='h-10' src={review} alt="Review Icon" />
      <p>Total Reviews</p>
      <h3 className="text-2xl font-bold">{reviews}</h3>
    </div>
    </div>
    <div className="card-actions ">
     <button
  aria-disabled={installed}
  onClick={!installed ? handleInstallAndSelect : undefined}
  className={`btn btn-lg ${installed ? 'btn-success pointer-events-none opacity-100' : 'btn-primary'}`}>
  {installed ? 'Installed' : `Install Now (${size})`}
</button>
    </div>
  </div>
  
</div>
<div className='my-9 '>
  <h2 className='text-4xl my-5 font-bold'>Rating</h2>
  <div className="rounded-lg shadow-sm">
     <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            layout="vertical"
            data={reversedRatings}
            margin={{
            top: 20,
            right: 30,
            bottom: 20,
             left: 60,
            }}
            >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={40} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#FF8811" name="Count" />
        </ComposedChart>
       </ResponsiveContainer>

  </div>
</div>
</div>
 <div className=" mt-8 mb-7">
        <h2 className='text-3xl font-bold '>Description</h2>
        <p className="text-gray-700 mt-5 rounded-lg">{description}</p>
            </div>
 </div>

    );
};

export default DetailsApp;