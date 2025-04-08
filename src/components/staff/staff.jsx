import React from 'react';

const EmployData = ({ name, email, hobbies }) => {
  return (
    <>
      <h3>Meet our stuff <span>{name} </span></h3>
      <p><span>Email: </span>{email}</p>
      <p><span>Hobbies: </span>{hobbies}</p>
    </>
  );
};

export default EmployData;
