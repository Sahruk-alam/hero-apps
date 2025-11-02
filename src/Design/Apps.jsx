import React, { useState } from 'react';
import AppsCard from './AppsCard';
import useApp from '../component/Hook/jsonHook';
import { SiAppstore } from "react-icons/si";
import Loading from '../component/Hook/Loading';
import NoApps from '../component/Hook/NoApps';
import { NavLink } from 'react-router';

const Apps = () => {
    const {apps,loading}=useApp();
    const [search,setSearch]=useState('');
      const trim=search.trim().toLocaleLowerCase();
    const searchApps= trim ? apps.filter(app=>
        app.title.toLocaleLowerCase().includes(trim)) 
        : apps;
        console.log(searchApps)
    if(loading){
        return <Loading count={16}></Loading>
    }
    // if(searchApps.length==0){
    //     return <h2>Not found</h2>
    // }
    return (
        <div className='bg-gray-200 '>
            <h2 className='text-2xl md:text-5xl mt-11 font-bold flex items-center 
            justify-center gap-3 text-center'>Our All Applications<SiAppstore /></h2>
            <p className='text-center my-3 mb-9 text-gray-500'>
                Explore All Apps on the Market developed by us. We code for Millions</p>
        <div className='justify-between flex px-4 md:px-10 my-5'>
              <h2 className='text-2xl font-semibold'><span>({searchApps.length})</span>Apps Found</h2>
              <label className='md:input px-2 '>
                <input
                value={search}
                onChange={e=>setSearch(e.target.value)}
                 type="search"
                  placeholder='search Products..' />
            </label>
        </div>

    
    { 
    searchApps.length===0? <div className='justify-center text-center flex'>
         <NoApps></NoApps>
           </div>
                               
        :(<div className='grid grid-cols-1 lg:grid-cols-4 gap-6 px-10 my-6'>
    {
    searchApps.map(app=><AppsCard key={app.id} app={app}></AppsCard>)
    }
        

        </div>)
    }       
      

      </div>
    );
};

export default Apps;