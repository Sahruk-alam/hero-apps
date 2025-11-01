import React from 'react';
import AppsCard from './AppsCard';
import useApp from '../component/Hook/jsonHook';
import { SiAppstore } from "react-icons/si";
import Loading from '../component/Hook/Loading';

const Apps = () => {
    const {apps,loading}=useApp();
    if(loading){
        return <Loading count={16}></Loading>
    }
    return (
        <div className='bg-gray-200 '>
            <h2 className='text-5xl mt-11 font-bold flex items-center justify-center gap-3 text-center'>Our All Applications<SiAppstore /></h2>
            <p className='text-center my-3 mb-9 text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
        <div className='justify-between flex px-10 my-5'>
              <h2 className='text-2xl font-semibold'><span>({apps.length})</span>Apps Found</h2>
              <button className='btn'>Search</button>
        </div>
<div className='grid grid-cols-1
        lg:grid-cols-4 gap-6 px-10 my-6'>
    {
        apps.map(app=><AppsCard key={app.id} app={app}></AppsCard>)
    }       
      
</div>
      </div>
    );
};

export default Apps;