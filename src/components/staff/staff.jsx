import React from 'react';

const EmployData = ({ name, email, employmentHistory, hobbies }) => {
  return (
    <>
      <p><span>Name: </span>{name}</p>
      <p><span>Email: </span>{email}</p>
      <p><span>Employment History: </span>{employmentHistory}</p>
      <p><span>Hobbies: </span>{hobbies.join(', ')}</p>
    </>
  );
};

export default EmployData;
