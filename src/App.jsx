import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Become a React Dev" subtitle="Kickstart your journey with modern tools and frameworks. Build fast, scalable, and interactive web apps using React." />
      <HomeCards />
      <JobListings />
    </>
  )
}

export default App