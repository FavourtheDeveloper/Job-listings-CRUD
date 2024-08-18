import React from "react";
import Button from "./Button";

const Job = () => {
  return (
    <div className="bg-gray-200 p-4 m-2 w-1/4 rounded-xl">
      <small>Full Time</small>
      <h1 className="text-2xl font-bold mb-3">Senior React Developer</h1>
      <p className="text-sm">We are seeking a Senior Frontend Developer to join our Team</p>
      <small className="text-blue-600">More</small>
      <p className="mt-2 text-blue-600 text-sm">$70K -$80K/Year</p>

      <div className="flex justify-between mt-5">
        <h4 className="text-red-600 text-xs">Noston, MA</h4>
        <Button btnText={"Read More"} btnColor={"blue"} />
      </div>

    </div>
  );
};

export default Job;
