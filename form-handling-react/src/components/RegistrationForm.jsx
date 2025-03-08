import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md w-80 mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
      </div>
      
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Register</button>
    </form>
  );
};

export default RegistrationForm;
