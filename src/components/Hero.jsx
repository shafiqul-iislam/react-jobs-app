import React from "react";

// title props with default value and subtitle props with default value
const Hero = ({ title = "React Dev", subtitle = "Build fast, scalable, and interactive web apps using React." }) => {
    return (
        <section className="bg-indigo-500 py-20 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white py-6">
                    {title}
                </h1>
                <p className="text-white text-lg md:text-xl mb-8">
                    {subtitle}
                </p>
                <a
                    href="#"
                    className="inline-block bg-white text-indigo-500 px-5 py-2 rounded-lg text-lg font-medium hover:bg-black hover:text-white transition"
                >
                    Get Started
                </a>
            </div>
        </section>
    )
}

export default Hero