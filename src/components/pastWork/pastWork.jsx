
import React from "react";

const PastWork = ({ name, employmentHistory }) => {
 
  return (
    <div>
      <h4>{name}</h4>
      <p>{employmentHistory}</p>
    </div>
  );
};

export default PastWork;
