import React, { useEffect, useState } from 'react';
import { GrInstall } from "react-icons/gr";
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import useApp from '../component/Hook/jsonHook';
import AnimationLoading from '../component/Hook/AnimationLoading';
const Installation = () => {
    const {loading}=useApp();
  
    const [sortOrder, setSortOrder] = useState('none');
    const [select,setSelect]=useState([])

       useEffect(()=>{
        const saveList=JSON.parse(localStorage.getItem('Selected'))
        if(saveList){
           saveList.forEach(item => {
      item.size = Number(item.size.replace("MB", "").trim());
    })
            setSelect(saveList)  
        }
    },[])

       const order=(()=>{
        if(sortOrder=='size-asc'){
            return [...select].sort((a,b)=>(a.size)-(b.size))
        }else if(sortOrder=='size-desc'){
             return [...select].sort((a,b)=>(b.size)-(a.size))
        }else{
            return select;
        }
    }) ();

     const handleRemove=(id)=>{
     const list =JSON.parse(localStorage.getItem('Selected'))
     let updateData=list.filter(p=>p.id!==id)
    localStorage.setItem('Selected',JSON.stringify(updateData))
    setSelect(updateData) 
 }
  if(loading){
        return <AnimationLoading/>;
    }
    return (
        <div className='bg-gray-200 min-h-screen'>
            <h2 className='text-4xl md:text-5xl text-center mt-11 flex items-center
             justify-center gap-3 font-bold'>Your Installed Apps<GrInstall /></h2>
            <p className='text-center my-3 mb-9 px-2 md:px-0 text-gray-500'>
                Explore All Trending Apps on the Market developed by us</p>
             <div className='px-3 md:px-20 gap-3.5'>
                
                <div className='flex px-3.5 md:px-0 justify-between'>
                    
                <h2 className='font-semibold underline text-indigo-600 md:text-2xl'>{select.length} App Found</h2>
                 <label className='w-full max-w-xs'>
                <select className='select' value={sortOrder} 
                    onChange={e=>setSortOrder(e.target.value)}>
                    <option value="none">Sort by size</option>
                    <option value="size-asc">Low-&gt;high</option>
                    <option value="size-desc">High-&gt;low</option>
                </select>
            </label>
            </div>
<hr className='my-12 text-gray-400 '/> 
        {
        order.map(p=>
    <div key={p.id} className="card mb-6 card-side bg-base-100 rounded-4xl shadow-lg">
  <figure>
    <img className='max-w-40 ml-3 p-3.5 object-cover'
      src={p.image}
      alt={p.name} />
  </figure>
  <div className="card-body md:gap-12">
    <h2 className="card-title justify-center mb- md:justify-start">{p.title}</h2>
    
    <div className='md:flex md:gap-9 md:text-left items-center'>
         <h2 className=' rounded-xl flex gap-2 text-green-600'>
              <img className='h-4' src={download} alt="" />{p.downloads}</h2>

            <h2 className=' rounded-2xl flex gap-2 my-2 md:my-0 text-amber-600'>
                <img className='h-4' src={rating} alt="" />{p.ratingAvg}</h2>
         <p className='font-bold'>${p.size}MB</p>
    </div>
    
   </div>

    <div className="pr-4 flex items-center gap-3 "> 
        
      <button onClick={()=>handleRemove(p.id)} className="btn btn-success">Uninstall</button>
    </div>
  
</div>)
        }
             </div>
        </div>
    );
};

export default Installation;         