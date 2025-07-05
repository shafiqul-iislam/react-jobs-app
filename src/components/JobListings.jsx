import React from 'react';
import jobs from '../jobs.json';
import JobListing from '../components/JobListing';

const JobListings = ({isHome = false}) => {
    const listJobs = isHome ? jobs.slice(0, 3) : jobs;

    return (
        <section className="bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Browse Jobs</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {listJobs.map((job) => (
                        <JobListing key={job.id} job={job} />
                    ))}
                </div>
            </div>            
        </section>
    )
}

export default JobListings