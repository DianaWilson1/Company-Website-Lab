import React from "react";

const PastWork = ({ name, employmentHistory }) => {
  return <>
  <div>
    <ul>
      <p>
      <span><h4>{name}:</h4> </span><span>{employmentHistory}</span>
      </p>
      </ul>
    </div>
  </>
};

export default PastWork;
