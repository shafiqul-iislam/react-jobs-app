import Card from '../components/Card';

const HomeCards = () => {
    return (
        <section className="bg-white py-10 px-3">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Developer Card */}
                    <Card>
                        <h4 className="text-2xl font-semibold mb-2">For Developers</h4>
                        <p className="text-gray-600 mb-4">
                            Browse and apply for jobs, share your skills, and connect with like-minded professionals.
                        </p>
                        <a
                            href="#developer"
                            className="inline-block bg-black text-white px-4 py-1 rounded-md hover:bg-indigo-500 transition"
                        >
                            Browse Jobs
                        </a>
                    </Card>

                    {/* Employee Card */}
                    <Card bg="bg-indigo-100">
                        <h4 className="text-2xl font-semibold mb-2">For Employees</h4>
                        <p className="text-gray-600 mb-4">
                            List your job openings, connect with developers, and find the perfect fit for your team.
                        </p>
                        <a
                            href="#employee"
                            className="inline-block bg-indigo-500 text-white px-4 py-1 rounded-md hover:bg-black transition"
                        >
                            Add Job
                        </a>
                    </Card>


                </div>
            </div>
        </section>
    )
}

export default HomeCards