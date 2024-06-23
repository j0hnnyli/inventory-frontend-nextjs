'use client'
import Image from "next/image";
import React from "react";

const error = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-5 px-2">
        <Image
          src="/bearsleeping.jpeg"
          alt="error"
          width={300}
          height={300}
          className="rounded-xl"
        />
        <h2 className="text-green-500 text-2xl text-center">
          Thank you for your patience while our servers are waking up
        </h2>
        <p className="text-xl text-red-500 text-center">Please try and refresh in a few seconds</p>
      </div>
    </div>
  );
};

export default error;
