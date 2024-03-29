/** @format */

import React, { useState, useEffect } from "react";

const ProfileBar = ({ doctor }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="lg:mx-10 mx-3 my-2 py-2 px-3 border space-y-2">
        <p className="font-semibold text-lg ">{doctor.email}</p>
        <p className="font-mediumm ">Name: {doctor.contact}</p>
        <p className="font-mediumm ">Description: {doctor.description}</p>
        <p className="font-mediumm ">Specialist: {doctor.specialist}</p>
        <p className="font-mediumm ">Address: {doctor.address}</p>
        <button
          onClick={handleClick}
          className="border py-1 px-4 bg-indigo-400 text-[#fff] rounded-lg hover:bg-indigo-500"
        >
          Have a talk
        </button>
        {show ? (
          <div className="flex-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-4 bg-white border border-black font-bold h-[300px] items-center justify-center">
            <p className="text-right ">
              <a onClick={handleClick} href="#">
                {" "}
                X
              </a>
            </p>
            <div className="md:space-x-2 py-2">
          <label className="title text-md font-medium">Name:</label>
          <input
            className="border-b-2 outline-none hover:border-black"
            type="text"
          />
            </div>

            <div className="md:space-x-2 py-2">
          <label className="title text-md font-medium">Contact Number:</label>
          <input
            className="border-b-2 outline-none hover:border-black"
            type="text"
          />
            </div>

            <div className="md:space-x-2 py-2">
          <label className="title text-md font-medium">Issue:</label>
          <input
            className="border-b-2 outline-none hover:border-black"
            type="text"
          />
            </div>

            <div className="md:space-x-2 py-2">
          <label className="title text-md font-medium">Time:</label>
          <input
            className="border-b-2 outline-none hover:border-black"
            type="datetime-local"
          />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ProfileBar;
