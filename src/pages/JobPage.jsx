// import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";

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
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                <p className="text-gray-600 mb-4">
                    {job.company} · {job.location} · <span className="font-medium">{job.type}</span>
                </p>
                <p className="text-green-600 font-semibold mb-4">{job.salary}</p>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                    <p className="text-gray-700">{job.description}</p>
                </div>
                <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Apply Now
                </a>
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