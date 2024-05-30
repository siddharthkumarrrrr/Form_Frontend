import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    tenthPercentage: '',
    twelfthPercentage: '',
    dob: '',
    branch: '',
    admissionYear: '',
    passingYear: '',
    currentCompany: '',
    designation: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
     setIsSubmitting(true);
    console.log(formData);
    try {
      const response = await fetch('https://from-backend.onrender.com/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register');
      }
      navigate('/login');
      alert('Registration successful!');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  
  return (
    <>
    <Navbar/>
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <div className="text-2xl font-bold mb-4 text-center">Registration Form</div>
        
        <div className="text-xl font-semibold mb-4">Personal Details</div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="tenthPercentage" className="block text-sm font-medium text-gray-700">10th Percentage</label>
          <input
            type="text"
            id="tenthPercentage"
            name="tenthPercentage"
            value={formData.tenthPercentage}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="twelfthPercentage" className="block text-sm font-medium text-gray-700">12th Percentage</label>
          <input
            type="text"
            id="twelfthPercentage"
            name="twelfthPercentage"
            value={formData.twelfthPercentage}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="admissionYear" className="block text-sm font-medium text-gray-700">Admission Year</label>
          <input
            type="date"
            id="admissionYear"
            name="admissionYear"
            value={formData.admissionYear}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="passingYear" className="block text-sm font-medium text-gray-700">Passing Year</label>
          <input
            type="date"
            id="passingYear"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700">Current Company</label>
          <input
            type="text"
            id="currentCompany"
            name="currentCompany"
            value={formData.currentCompany}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="text-xl font-semibold mb-4">Signup Details</div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <button
           disabled={isSubmitting}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
           {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </main>
    </>
  );
};

export default Register;
