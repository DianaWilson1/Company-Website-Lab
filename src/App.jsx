// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
import CompanyHistory from "./components/companyHistory/companyHistory.jsx";
import ExternalLinks from "./components/externalLinks/externalLinks.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import PastWork from './components/pastWork/pastWork.jsx';

const App = () => {

  const employeeProfiles = [
    {
      name: 'Jane Doe',
      address: '123 Innovation Way, San Francisco, CA 94107',
      email: 'jane.doe@example.com',
      employmentHistory: 'Former Software Engineer at TechNova, Project Lead at DevSpace',
      hobbies: ['Hiking', 'Photography', 'Board Games'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      imgAlt: 'Microsoft logo',
      ContactUs: 'contact@fakecompany.com',
    },
    {
      name: 'John Smith',
      address: '456 Digital Dr, New York, NY 10001',
      email: 'john.smith@example.com',
      employmentHistory: 'UX Designer at PixelPerfect, Front-End Dev at UIFlow',
      hobbies: ['Sketching', 'Cycling', 'Indie Film Making'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
      imgAlt: 'Apple logo',
      ContactUs: 'support@fakecompany.com',
    },
    {
      name: 'Emily Chen',
      address: '789 Cloud Ave, Seattle, WA 98101',
      email: 'emily.chen@example.com',
      employmentHistory: 'Cloud Architect at SkyBase, Developer at NetSphere',
      hobbies: ['Cooking', '3D Printing', 'Travel Blogging'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png',
      imgAlt: 'Google logo',
      ContactUs: 'hello@fakecompany.com',
    },
    {
      name: 'Carlos Ramirez',
      address: '321 Tech Park Blvd, Austin, TX 73301',
      email: 'carlos.ramirez@example.com',
      employmentHistory: 'Data Analyst at InfoCore, BI Specialist at Dashlytics',
      hobbies: ['Soccer', 'Drone Racing', 'Podcasting'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Logo_of_Twitter.svg',
      imgAlt: 'Twitter logo',
      ContactUs: 'team@fakecompany.com',
    },
    {
      name: 'Ava Patel',
      address: '654 Silicon Blvd, Palo Alto, CA 94301',
      email: 'ava.patel@example.com',
      employmentHistory: 'QA Engineer at TestGuru, DevOps Specialist at CloudNest',
      hobbies: ['Yoga', 'Gardening', 'Writing Fiction'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      imgAlt: 'Netflix logo',
      ContactUs: 'info@fakecompany.com',
    },
  ];

  return (
    <>
      <Navbar />
      <h1>Hello world!</h1>
      <CompanyHistory />
      <div className="image-grid">
        {employeeProfiles.map((profile, index) => (
          <ExternalLinks key={index} src={profile.img} alt={profile.imgAlt} />
        ))}
      </div>
      <div>
        {employeeProfiles.map((profile, index) => (
          <PastWork key={index} name={profile.name} employmentHistory={profile.employmentHistory} />
        ))}


      </div>

    </>
  );
};

export default App
