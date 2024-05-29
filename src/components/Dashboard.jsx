import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [alumni, setAlumni] = useState([]);

    // useEffect(() => {
    //     fetchAlumni();
    // }, []);

    const fetchAlumni = async () => {
        try {
           const token=localStorage.getItem('token');
             console.log(token);
            const response = await fetch('https://from-backend.onrender.com/auth/all', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setAlumni(data);
        } catch (error) {
            console.error('Error fetching alumni:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Alumni</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {alumni.map((alumnus, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-bold mb-2">{alumnus.name}</h2>
                        <div className="grid grid-cols-1 gap-2">
                            {Object.entries(alumnus).map(([key, value], i) => (
                                key !== 'name' && key!=='_id'&& key!=='__v'&& key !== 'email' && key !== 'password' && (
                                    <div key={i}>
                                        <span><p className="font-semibold">{key}</p></span>
                                       <span><p>{value}</p></span> 
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
