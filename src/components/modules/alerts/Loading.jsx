import React from 'react';
import {Spinner} from "@heroui/react";
const Loading = ({state}) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-200 bg-opacity-50 fixed top-0 left-0 z-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-transparent border-gray-400 rounded-full animate-spin mx-auto"></div>
        {/* Text */}
        <h3 className="mt-4 text-xl font-semibold animate-pulseText">
        <Spinner classNames={{label: " mt-4 text-primary"}} label="Cargando..." variant="wave" size='lg' />
        </h3>
      </div>
    </div>
  );
};

export default Loading;
