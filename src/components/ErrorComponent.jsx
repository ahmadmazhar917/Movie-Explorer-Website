import React from "react";

const ErrorComponent = ({ title, message }) => {
  return (
    <div className="max-w-[30rem] my-[1rem] mx-auto p-[1rem] bg-rose-200 text-red-900">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
