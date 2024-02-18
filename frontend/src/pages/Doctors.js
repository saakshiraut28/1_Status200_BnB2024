/** @format */

import React, { useEffect, useState } from "react";
import ProfileBar from "../components/Profilebar";

const GetDoctors = () => {
  const [doctors, setDoctors] = useState();
  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch(
        `https://healthdeck.onrender.com/api/doctors`
      );
      const json = await response.json();

      if (response.ok) {
        setDoctors(json);
      }
    };
    fetchDoctors();
  }, []);
  return (
    <>
      <div className="text-4xl text-center font-semibold">
        Say hi, to the Doctors! 🙋‍♀️
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1">
        {doctors &&
          doctors.map((doctor) => (
            <div className="grid border border-2 m-2">
              <ProfileBar key={doctor._id} doctor={doctor} />
            </div>
          ))}
      </div>
    </>
  );
};

export default GetDoctors;
