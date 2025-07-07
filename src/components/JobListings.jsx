import { useState, useEffect } from 'react';
import JobListing from '../components/JobListing';
import Spinner from '../components/Spinner';

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const url = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
            try {
                const res = await fetch(url);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('error', error);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    return (
        <section className="bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Browse Jobs</h2>
                {
                    loading ? (<Spinner loading={loading} />) : (
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default JobListings