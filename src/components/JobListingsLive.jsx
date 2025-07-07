// import { useState, useEffect } from 'react';
// import JobListing from '../components/JobListing';
// import Spinner from '../components/Spinner';
// import jobs from '../jobsLive.json';

// const JobListingsLocal = ({ isHome = false }) => {
//     const listJobs = isHome ? jobs.slice(0, 3) : jobs;  

//     return (
//         <section className="bg-gray-100 py-10 px-4">
//             <div className="max-w-6xl mx-auto">
//                 <h2 className="text-3xl font-bold mb-8 text-center">Browse Jobs</h2>
//                 {
//                     loading ? (<Spinner loading={loading} />) : (
//                         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//                             {listJobs.map((job) => (
//                                 <JobListing key={job.id} job={job} />
//                             ))}
//                         </div>
//                     )
//                 }
//             </div>
//         </section>
//     )
// }

// export default JobListingsLocal