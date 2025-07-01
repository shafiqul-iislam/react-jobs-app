import React from 'react';

const jobs = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Techify',
        location: 'Remote',
        type: 'Full-time',
    },
    {
        id: 2,
        title: 'Backend Developer',
        company: 'CloudCore',
        location: 'Dhaka, Bangladesh',
        type: 'Part-time',
    },
    {
        id: 3,
        title: 'React Native Engineer',
        company: 'AppSquad',
        location: 'Remote',
        type: 'Contract',
    },
];

const JobListing = () => {
    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Job Listings</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {job.title}
                            </h3>
                            <p className="text-gray-600 mb-1">{job.company}</p>
                            <p className="text-sm text-gray-500 mb-4">{job.location}</p>
                            <span className="inline-block bg-teal-100 text-teal-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                                {job.type}
                            </span>
                            <div>
                                <a
                                    href="#apply"
                                    className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JobListing