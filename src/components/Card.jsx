import React from 'react';

const Card = ({ children, bg = 'bg-gray-100' }) => {
    return (
        <div className={`${bg} rounded-xl p-5 shadow hover:shadow-md transition`}>
            {children}
        </div>
    )
}

export default Card