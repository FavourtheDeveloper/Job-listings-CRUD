import React from "react";
import Button from "./Button";

const Job = ({jobs}) => {
  return (
    <div className="bg-gray-100 p-4 m-2 md:w-1/4 rounded-xl">
      <small>{jobs.jobType}</small>
      <h1 className="text-2xl font-bold mb-3">{jobs.jobTitle}</h1>
      <p className="text-sm">{jobs.jobDescription}</p>
      <small className="text-blue-600">More</small>
      <p className="mt-2 text-blue-600 text-sm">{jobs.salary}</p>

      <div className="flex justify-between mt-5">
        <h4 className="text-red-600 text-xs">{jobs.location}</h4>
        <Button btnText={"Read More"} btnColor={"blue"} dest={`/job/${jobs.id}`} />
      </div>

    </div>
  );
};

export default Job;
