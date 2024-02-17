/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import { videos } from "../data/video";
import VideoGridItem from "../components/VideoGridItem";

import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  return (
    <>
      <Navbar />
      <div className="lg:px-10 px-4 py-4">
        {user && <p>User exist</p>}
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {videos.map((video) => (
            <VideoGridItem key={video.id} {...video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
