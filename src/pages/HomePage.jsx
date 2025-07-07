import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import ViewJobs from '../components/ViewJobs';
import JobListings from '../components/JobListings';
// import JobListingsLive from '../components/JobListingsLive';

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