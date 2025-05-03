import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import JobList from "./JobList";
import Pagination from "./Pagination";
import Loading from "./Loading";
import Error from "./Error";

const API_ENDPOINT =
  import.meta.env.VITE_APP_API_ENDPOINT || "http://localhost:5000/api";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [experienceLevelFilter, setExperienceLevelFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const limit = 10;

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const url = new URL(API_ENDPOINT + "/jobs");
      if (searchQuery) {
        url.searchParams.set("search", searchQuery); // Changed this line
      }
      console.log(experienceLevelFilter);
      if (locationFilter !== "all location")
        url.searchParams.set("location", locationFilter);
      if (experienceLevelFilter !== "All Level")
        url.searchParams.set("experienceLevel", experienceLevelFilter);
      url.searchParams.set("page", String(currentPage));
      url.searchParams.set("limit", String(limit));

      console.log("Fetching URL:", url.toString()); // Log the constructed URL

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch jobs: ${response.status}`);
      }

      const data = await response.json();
      setJobs(data.jobs);
      setTotalJobs(data.totalJobs);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.message || "An error occurred while fetching jobs.");
    } finally {
      setLoading(false);
    }
  }, [searchQuery, locationFilter, experienceLevelFilter, currentPage, limit]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleLocationChange = (value) => {
    setLocationFilter(value);
    setCurrentPage(1);
  };

  const handleExperienceLevelChange = (value) => {
    setExperienceLevelFilter(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return <Loading limit={limit} />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Find Your Dream Job
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchBar onSearch={handleSearch} />
          <FilterBar
            locationFilter={locationFilter}
            onLocationChange={handleLocationChange}
            experienceLevelFilter={experienceLevelFilter}
            onExperienceLevelChange={handleExperienceLevelChange}
          />
        </div>

        <JobList jobs={jobs} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>

      <footer className="bg-gray-200 dark:bg-gray-800 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Job Board. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
