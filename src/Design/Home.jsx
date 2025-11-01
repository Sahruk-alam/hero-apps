import React from "react";
import Build from "./Build";
import useApp from "../component/Hook/jsonHook";
import AppsCard from "./AppsCard";

const Home = () => {
  const { apps } = useApp();
  const featureApp = apps.slice(0, 6);
  // console.log(apps)
  return (
    <div className="bg-gray-200">
      <Build></Build>

      <div className="my-9">
        <h2 className="text-5xl text-center font-bold">Trending Apps
          <img src={} alt="" />
        </h2>
        <p className="text-center font-[] text-gray-700 text-[20px]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-3  ">
        {
      featureApp.map(app => <AppsCard key={app.id} app={app}></AppsCard>
      )
      }
      </div>
    </div>
  );
};

export default Home;
