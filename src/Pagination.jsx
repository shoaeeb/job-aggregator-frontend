import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the path if needed
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"; // Adjust the path if needed

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleFirstPage = () => {
    if (currentPage > 1) {
      onPageChange(1);
    }
  };

  const handleLastPage = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages);
    }
  };
  return (
    totalPages > 1 && (
      <div className="flex items-center justify-center mt-8 space-x-2">
        <Button
          variant="outline"
          onClick={handleFirstPage}
          disabled={currentPage === 1}
          className="px-2"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
          className="px-2"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    )
  );
};

export default Pagination;
