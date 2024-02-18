/** @format */

import React, { useState, useEffect } from "react";

const ProfileBar = ({ doctor }) => {
  return (
    <>
      <div className="lg:mx-10 mx-3 my-2 py-2 px-3 border">
        <p className="font-mediumm text-lg ">{doctor.email}</p>
        <p className="font-mediumm ">Contact: {doctor.contact}</p>
        <p className="font-mediumm ">Description: {doctor.description}</p>
        <p className="font-mediumm ">Specialist: {doctor.specialist}</p>
        <p className="font-mediumm ">Address: {doctor.address}</p>
        <button className="border py-1 px-4 bg-indigo-400 text-[#fff] rounded-lg hover:bg-indigo-500">
          Have a talk
        </button>
      </div>
    </>
  );
};

export default ProfileBar;
