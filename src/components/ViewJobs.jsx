import React from 'react';
import { Link } from 'react-router-dom';

const ViewJobs = () => {
    return (
        <section className="bg-gray-100 py-1 px-4">
            <div className="flex justify-center">
                <Link to="/jobs" className="inline-block bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 hover:text-white transition">View All Jobs</Link>
            </div>
        </section>
    )
}

export default ViewJobs