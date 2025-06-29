import React from 'react'

const RoleCards = () => {
    return (
        <section className="bg-white py-10 px-3">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Developer Card */}
                    <div className="bg-gray-100 rounded-xl p-5 shadow hover:shadow-md transition">                        
                        <h3 className="text-2xl font-semibold mb-2">Developer</h3>
                        <p className="text-gray-600 mb-4">
                            Build apps, write clean code, and collaborate with teams. Join a platform tailored for modern devs.
                        </p>
                        <a
                            href="#developer"
                            className="inline-block bg-black text-white px-4 py-1 rounded-md hover:bg-teal-700 transition"
                        >
                            I'm a Developer
                        </a>
                    </div>

                    {/* Employee Card */}
                    <div className="bg-purple-100 rounded-xl p-5 shadow hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold mb-2">Employee</h3>
                        <p className="text-gray-600 mb-4">
                            Manage your work, collaborate on tasks, and stay productive with tools built for professionals.
                        </p>
                        <a
                            href="#employee"
                            className="inline-block bg-indigo-500 text-white px-4 py-1 rounded-md hover:bg-teal-700 transition"
                        >
                            I'm an Employee
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoleCards