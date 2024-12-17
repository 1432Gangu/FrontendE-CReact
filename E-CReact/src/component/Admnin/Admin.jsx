import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home2 from '../../assets/Images/Home2.webp'

const Admin = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    role: "", 
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role selection is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);

     
      const roleRoutes = {
        RestaurantAdmin: "/Home",
        SuperAdmin: "/AdminLogin",
        RestaurantManager: "/AdminLogin",
        Customer: "/Home", 
      };

      const targetRoute = roleRoutes[formData.role];

      if (targetRoute) {
        navigate(targetRoute, {
          state: {
            name: formData.name,
            password: formData.password,
          },
        });
      } else {
        console.error("Invalid role selected");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Home2})` }}>
  <div className="w-full max-w-md bg-white bg-opacity-70 p-4 rounded-lg shadow-lg backdrop-blur-md">
    <h2 className="text-2xl font-bold text-center mb-6">Welcome to the Food Ordering App!</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Restorent Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full px-4 py-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone No
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`mt-1 block w-full px-4 py-2 border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full px-4 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`mt-1 block w-full px-4 py-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Select Role
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className={`mt-1 block w-full px-4 py-2 border ${
            errors.role ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
        >
          <option value="" disabled>
            Select a role
          </option>
          <option value="RestaurantAdmin">Restaurant Admin</option>
          <option value="SuperAdmin">Super Admin</option>
          <option value="RestaurantManager">Restaurant Manager</option>
          <option value="Customer">Customer</option>
        </select>
        {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
      </div>

      <button
        type="submit"
        className="bg-red-600 px-8 py-2 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
      >
        Submit
      </button>
    </form>
  </div>
</div>


  );
};

export default Admin;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Admin = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({}); 
//   const navigate = useNavigate(); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

   
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};

  
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
//       newErrors.name = "Name can only contain letters and spaces";
//     }

    
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Phone number must be 10 digits";
//     }

    
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
//     ) {
//       newErrors.email = "Invalid email format";
//     }

   
//     if (!formData.password.trim()) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; 
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form Data Submitted:", formData);

      
//       navigate("/AdminLogin", {
//         state: {
//           name: formData.name,
//           password: formData.password,
//         },
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Admin Registration Form
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className={`mt-1 block w-full px-4 py-2 border ${
//                 errors.name ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//               required
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//             )}
//           </div>
//           <div>
//             <label
//               htmlFor="phone"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Phone No :
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className={`mt-1 block w-full px-4 py-2 border ${
//                 errors.phone ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//               required
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//             )}
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`mt-1 block w-full px-4 py-2 border ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//               required
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className={`mt-1 block w-full px-4 py-2 border ${
//                 errors.password ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//               required
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="bg-red-600 px-8 py-2 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Admin;
