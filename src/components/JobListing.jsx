import { useState } from 'react';

const JobListing = ({ job }) => {

    const [showFullDescription, setFullDescription] = useState(false);
    let description = job.description;

    if (!showFullDescription) {// if description is full, show less
        description = description.substring(0, 90) + '...';
    }

    return (
        <div key={job.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                {job.type}
            </span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {job.title}
            </h3>

            <p className="text-gray-600">{description}</p>

            <button onClick={() => setFullDescription((prevStatus) => !prevStatus)} className='text-sm text-indigo-500 hover:text-indigo-600 mb-4'>{showFullDescription ? 'Less' : 'More'}</button>

            <p className="text-indigo-500 mb-4">{job.salary}</p>

            <div className="border border-gray-200 mb-4"></div>

            <div className="flex justify-between atems-center mb-4">
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-gray-600">{job.company.name}</p>
            </div>

            <div>
                <a
                    href={`job/${job.id}`}
                    className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white transition w-full text-center"
                >
                    Read More
                </a>
            </div>
        </div>
    )
}

export default JobListing