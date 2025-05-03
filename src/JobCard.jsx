import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Adjust the path if needed

// Helper function to format date
const formatDate = (dateString) => {
  return dateString;
};

const JobCard = ({ job }) => {
  // Safely handle null or undefined job.description
  const description = job.description || ""; // Treat null/undefined as empty string
  const displayDescription =
    description.length > 200
      ? `${description.substring(0, 200)}...`
      : description;

  return (
    <Card className="transition-transform transform hover:scale-105">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {job.title}
          </a>
        </CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Location: {job.location}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Experience: {job.experienceLevel}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Posted: {job.postedDate ? formatDate(job.postedDate) : "N/A"}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
          {displayDescription}
        </p>
      </CardContent>
    </Card>
  );
};

export default JobCard;
