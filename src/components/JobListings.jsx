import React from 'react';
import jobs from '../jobs.json';
import JobListing from '../components/JobListing';

//     {
//         id: 1,
//         title: 'Frontend Developer',
//         company: 'Techify',
//         location: 'Remote',
//         type: 'Full-time',
//     },
//     {
//         id: 2,
//         title: 'Backend Developer',
//         company: 'CloudCore',
//         location: 'Dhaka, Bangladesh',
//         type: 'Part-time',
//     },
//     {
//         id: 3,
//         title: 'React Native Engineer',
//         company: 'AppSquad',
//         location: 'Remote',
//         type: 'Contract',
//     },
// ];

const JobListings = () => {
    return (
        <section className="bg-gray-100 py-14 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Job Listings</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job) => (
                        <JobListing key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JobListings