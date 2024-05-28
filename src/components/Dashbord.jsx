
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../Hooks/ValidationHook';

const Dashboard = () => {
    useAuth(); // Call the custom hook to check authentication

    const [alumni, setAlumni] = useState([]);

    useEffect(() => {
        const fetchAlumni = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get('http://localhost:3000/auth/all', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setAlumni(response.data);
            } catch (error) {
                console.error('Error fetching alumni:', error);
            }
        };

        fetchAlumni();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Alumni List</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-3/4 lg:w-1/2">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200">Name</th>
                            <th className="py-2 px-4 bg-gray-200">Email</th>
                            <th className="py-2 px-4 bg-gray-200">Branch</th>
                            <th className="py-2 px-4 bg-gray-200">Current Company</th>
                            <th className="py-2 px-4 bg-gray-200">Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumni.map((alum, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4">{alum.name}</td>
                                <td className="py-2 px-4">{alum.email}</td>
                                <td className="py-2 px-4">{alum.branch}</td>
                                <td className="py-2 px-4">{alum.currentCompany}</td>
                                <td className="py-2 px-4">{alum.designation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
