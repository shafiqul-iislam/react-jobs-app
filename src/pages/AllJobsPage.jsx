import React from 'react';
import jobs from '../jobs.json';
import JobListing from '../components/JobListing';

const AllJobsPage = () => {
  return (
    <section className="bg-gray-100 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold py-8 text-center">Job Listings</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllJobsPage