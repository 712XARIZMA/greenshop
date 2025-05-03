import React from "react";

const LoadingCard = () => {
  return (
    <div className="bg-[#fbfbfb] w-[250px] h-[350px] p-4  rounded shadow-[0_0_30px_0px_rgba(0,0,0,0.115)] animate-pulse">
      <div className="w-full h-60 bg-gray-200 rounded mb-3" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
};

export default LoadingCard;
