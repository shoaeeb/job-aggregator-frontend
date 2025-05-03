import React from "react";
import JobCard from "./JobCard"; // Import JobCard

const JobList = ({ jobs }) => {
  return jobs.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-500 dark:text-gray-400 py-8">
      No jobs found matching your criteria.
    </div>
  );
};

export default JobList;
