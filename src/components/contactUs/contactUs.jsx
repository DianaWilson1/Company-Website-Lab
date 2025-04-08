import React from "react";
const EmployeeInformation = ({ name, email }) => {
  return (
    <>

      <div>

        <ul>
          <p><span>Name: </span>{name}</p>
          <p><span>Email: </span>{email}</p>
        </ul>
      </div>
    </>
  );
};

export default EmployeeInformation;

// const CompanyHistory = () => {
//   return (
//     <>
//       <h3>Company History</h3>
//       <p>History: <span>Founded in 1907 by visionaries in innovation, FakeCompany Inc.has evolved from a small garage operation into a global leader in technology, customer engagement, and AI-driven solutions.With over a century of dedication to excellence, we continue to pave the way for future-forward solutions.</span></p>
//     </>
//   )
// }
