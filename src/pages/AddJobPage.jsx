import React, { useState } from 'react';

const AddJobPage = () => {

    const [job, setJob] = useState({
        title: '',
        company: '',
        location: '',
        type: '',
        salary: '',
        email: '',
        phone: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Job submitted:', job);
        // TODO: Submit to backend or API
    };

    return (
        <section className="bg-indigo-50 py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Add New Job</h1>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-5">
                    <div>
                        <label className="block font-medium mb-1">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            value={job.title}
                            onChange={(e) => setJob({ ...job, title: e.target.value })}
                            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            value={job.company}
                            onChange={(e) => setJob({ ...job, company: e.target.value })}
                            className="w-full border rounded p-2"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={job.location}
                                onChange={(e) => setJob({ ...job, location: e.target.value })}
                                className="w-full border rounded p-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Job Type</label>
                            <select
                                name="type"
                                value={job.type}
                                onChange={(e) => setJob({ ...job, type: e.target.value })}
                                className="w-full border rounded p-2"
                                required
                            >
                                <option value="">Select</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Salary</label>
                            <input
                                type="text"
                                name="salary"
                                value={job.salary}
                                onChange={(e) => setJob({ ...job, salary: e.target.value })}
                                className="w-full border rounded p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={job.email}
                                onChange={(e) => setJob({ ...job, email: e.target.value })}
                                className="w-full border rounded p-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={job.phone}
                                onChange={(e) => setJob({ ...job, phone: e.target.value })}
                                className="w-full border rounded p-2"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Job Description</label>
                        <textarea
                            name="description"
                            value={job.description}
                            onChange={(e) => setJob({ ...job, description: e.target.value })}
                            className="w-full border rounded p-2 h-15"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-black hover:text-white transition"
                    >
                        Post Job
                    </button>
                </form>
            </div>
        </section>
    )
}

export default AddJobPage