import React from "react";
import Build from "./Build";
import useApp from "../component/Hook/jsonHook";
import AppsCard from "./AppsCard";
import { FaArrowTrendUp } from "react-icons/fa6";
import { NavLink } from "react-router";
import Loading from "../component/Hook/Loading";
const Home = () => {
  const { apps,loading } = useApp();
  const featureApp = apps.slice(0, 8);
if(loading){
  return <Loading></Loading>
}
  return (
    <div className="bg-gray-100 ">
      <Build></Build>
      <div className="my-9"> 
        <h2 className="text-5xl font-bold flex items-center justify-center gap-3">
          Trending Apps
          <FaArrowTrendUp className="text-4xl text-indigo-600" />
        </h2>
        <p className="text-center my-4 text-gray-700 text-[20px]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 gap-6 px-10">
        {
      featureApp.map(app => <AppsCard key={app.id} app={app}></AppsCard>
      )
      }
      </div>
      <div className="text-center">
        <NavLink className='justify-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
     btn btn-primary my-6 mb-15 px-8' to='/apps'>Show All</NavLink>
      </div>
    </div>
  );
};

export default Home;
