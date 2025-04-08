import React from "react";

const PastWork = ({ name, employmentHistory }) => {
  return <>
    <h4>Employ History of {name}</h4 >
    <ul>
      <li>
        <p>
          <span>{employmentHistory}</span>
        </p>
      </li>
    </ul>
  </>
};

export default PastWork;
