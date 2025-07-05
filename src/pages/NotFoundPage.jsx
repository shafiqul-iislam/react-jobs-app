import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-indigo-500 mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-6">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center text-white bg-indigo-500 hover:bg-black px-5 py-2.5 rounded-md text-sm font-medium transition"
                >
                    Back to Home
                </Link>
            </div>
        </section>
    )
}

export default NotFoundPage