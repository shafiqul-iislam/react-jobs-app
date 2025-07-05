import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewJobs from '../components/ViewJobs';

const HomePage = () => {
    return (
        <>
            <Hero title="Become a React Dev" subtitle="Kickstart your journey with modern tools and frameworks. Build fast, scalable, and interactive web apps using React." />
            <HomeCards />
            <JobListings isHome={true} />
            <ViewJobs />
        </>
    )
}

export default HomePage