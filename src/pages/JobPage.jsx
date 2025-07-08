// import { useEffect, useState } from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();

    // const [job, setJob] = useState(null);

    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data = await res.json();
    //             setJob(data);
    //         } catch (error) {
    //             console.log('error', error);
    //         }
    //     }
    //     fetchJob();
    // }, []);

    return (
        <div>
            <div className="max-w-4xl mx-auto px-4 py-20">
                <a href="/jobs" className="bg-gray-300 text-indigo-500 px-4 py-2 rounded hover:bg-gray-400 transition">Go Back</a>

                <h1 className="text-3xl font-bold mb-4 mt-5">{job.title}</h1>
                <p className="text-gray-600 mb-2">{job.type}</p>
                <p className="text-gray-600 mb-2">{job.description}</p>
                <p className="text-indigo-500 mb-2">{job.salary}</p>
                <p className="text-gray-600 mb-4">{job.location}</p>

                <h2 className="text-1xl font-bold mb-2">Company</h2>
                <p className="text-gray-600 mb-4">{job.company.name}</p>
                <p className="text-gray-600 mb-4">{job.company.description}</p>
                <p className="text-gray-600 mb-4">{job.company.contactEmail}, {job.company.contactPhone}</p>

                <Link
                    to="/apply"
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-black transition"
                >
                    Apply Now
                </Link>

                <div className="py-10">
                    <h2 className="text-1xl font-bold mb-2">Manage Jobs</h2>
                    <Link
                        to={`/edit-job/${job.id}`}
                        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-black transition mr-3"
                    >
                        Edit Job
                    </Link>

                    <button className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-black transition">Delete Job</button>

                </div>
            </div>
        </div>
    )
};


const JobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;

}

export { JobPage as default, JobLoader }