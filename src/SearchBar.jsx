import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjust the path if needed
import { Button } from "@/components/ui/button";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="Search for jobs..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Add this line
        className="w-full md:w-1/2"
      />
      <Button
        onClick={handleSearchClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
