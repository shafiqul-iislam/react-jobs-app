import React from 'react';
import jobs from '../jobs.json';
import JobListing from '../components/JobListing';

const recentJobs = jobs.slice(0, 3);


const JobListings = () => {
    return (
        <section className="bg-gray-100 py-14 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Job Listings</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {recentJobs.map((job) => (
                        <JobListing key={job.id} job={job} />
                    ))}
                </div>

            </div>

            <div className="flex justify-center mt-8">
                <a href="#" className="inline-block bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 hover:text-white transition">View All Jobs</a>
            </div>
        </section>
    )
}

export default JobListings