import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Adjust the path if needed

const FilterBar = ({
  locationFilter,
  onLocationChange,
  experienceLevelFilter,
  onExperienceLevelChange,
}) => {
  const locations = [
    "Kolkata",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Hyderabad",
    "Bangalore",
    "Pune",
    "All Location",
    "Remote",
  ];
  const experienceLevels = [
    "Entry-Level",
    "Mid-Level",
    "Senior-Level",
    "Associate",
    "Executive",
    "Internship",
    "All Level",
    "Other",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <Select onValueChange={onLocationChange} value={locationFilter}>
        <SelectTrigger className="w-full md:w-1/2">
          {" "}
          {/* Increased width */}
          <SelectValue placeholder="Select Location" />
        </SelectTrigger>
        <SelectContent className="w-full md:w-1/2">
          {locations.map((location) => (
            <SelectItem key={location} value={location.toLowerCase()}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={onExperienceLevelChange}
        value={experienceLevelFilter}
      >
        <SelectTrigger className="w-full md:w-1/2">
          {" "}
          {/* Increased width */}
          <SelectValue placeholder="Select Experience" />
        </SelectTrigger>
        <SelectContent className="w-full md:w-1/2">
          {experienceLevels.map((level) => (
            <SelectItem key={level} value={level}>
              {level}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterBar;
