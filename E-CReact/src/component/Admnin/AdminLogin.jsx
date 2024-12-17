import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home2 from '../../assets/Images/Home2.webp'

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [storedCredentials, setStoredCredentials] = useState(null); 
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    
    if (location.state) {
      const { name, password } = location.state;
      setStoredCredentials({ name, password });
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!storedCredentials) {
      alert("No stored credentials found. Please register first.");
      return;
    }

    const { name, password } = storedCredentials;

    
    if (formData.name === name && formData.password === password) {
      console.log("Login successful!");
      navigate("/ItemEdit");
    } else {
      alert("Invalid login credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Home2})` }}>
      <div className="w-full max-w-md bg-white bg-opacity-70 p-4 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Restorent Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 px-8 py-2 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
