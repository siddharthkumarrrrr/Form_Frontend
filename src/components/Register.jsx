import React, { useState } from 'react';

const Register = () => {
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <div className="text-2xl font-bold mb-4 text-center">Registration Form</div>
        
        <div className="mb-6">
          <div className="text-xl font-semibold mb-2">Personal Details</div>
          <label className="block mb-2">
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            10th Percentage
            <input
              type="text"
              name="tenthPercentage"
              value={formData.tenthPercentage}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            12th Percentage
            <input
              type="text"
              name="twelfthPercentage"
              value={formData.twelfthPercentage}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            Date of Birth
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            Engg. Branch
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            Admission Year
            <input
              type="date"
              name="admissionYear"
              value={formData.admissionYear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            Year of Passing
            <input
              type="date"
              name="passingYear"
              value={formData.passingYear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            Currently Working At
            <input
              type="text"
              name="currentCompany"
              value={formData.currentCompany}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            Designation
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Sign-up Details</h2>
          <label className="block mb-4">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;
