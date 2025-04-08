import React from 'react';

const EmployData = ({ name, email, hobbies }) => {
  return (
    <>
    <div>
      <h3><span>{name} </span></h3>
      <p><span>Email: </span>{email}</p>
      <p><span>Hobbies: </span>{hobbies}</p>
      </div>
    </>
  );
};

export default EmployData;
