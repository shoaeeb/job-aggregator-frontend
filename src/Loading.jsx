import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Skeleton } from "./components/ui/skeleton"; // Adjust the path if needed

const Loading = ({ limit }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        Loading Jobs...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {[...Array(limit)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-full" />
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-1/2" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Loading;
