import React, { useEffect, useRef, useState } from 'react';
import AppsCard from './AppsCard';
import useApp from '../component/Hook/jsonHook';
import { SiAppstore } from "react-icons/si";
import Loading from '../component/Hook/Loading';
import NoApps from '../component/Hook/NoApps';
import AnimationLoading from '../component/Hook/AnimationLoading';
import loadingImage from '../assets/logo.png'
const Apps = () => {
    const {apps,loading}=useApp();
    const [search,setSearch]=useState('');
 const [isSearching, setIsSearching] = useState(false);
  const timerRef = useRef(null);
  const appsSafe = Array.isArray(apps) ? apps : [];
      const trim=search.trim().toLocaleLowerCase();
    const searchApps= trim ? appsSafe.filter(app=>
        app.title.toLocaleLowerCase().includes(trim)) 
        : appsSafe;
 useEffect(() => {
        return () => clearTimeout(timerRef.current); // cleanup on unmount
    }, []);
    const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    setIsSearching(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsSearching(false), 100); // 500ms debounce
  };
     if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <AnimationLoading />
            </div>
        );
    };
    
    return (
        <div className='bg-gray-200 relative min-h-screen'>
            <h2 className='text-2xl md:text-5xl mt-11 font-bold flex items-center 
            justify-center gap-3 text-center'>Our All Applications<SiAppstore /></h2>
            <p className='text-center my-3 mb-9 text-gray-500'>
                Explore All Apps on the Market developed by us. We code for Millions</p>
        <div className='justify-between flex px-4 md:px-10 my-5'>
              <h2 className='text-2xl font-semibold'><span>({searchApps.length})</span>Apps Found</h2>
              <label className='md:input px-2 '>
                <input
                value={search}
                onChange={handleSearchChange}
                type="search"
                placeholder='search Products..' />
            </label>
        </div>
{isSearching && (
        <div className="justify-center flex">
          <div className="flex fixed z-[9999] items-center justify-center bg-gray-200 h-screen"> <span 
                  className='text-5xl font-bold text-gray-400 mr-10'>L</span>
                      <div className="animate-spin rounded-full w-23 ">
                          <img src={loadingImage} alt="Loading..." />
                      </div> <span className='text-5xl ml-8 font-bold text-gray-400'>O A D I N G</span>
                  </div>
        </div>
      )}
    
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