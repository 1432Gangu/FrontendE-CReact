// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import AdminLogin from '../../assets/Images/AdminLogin.jpg';

// const ItemEdit = () => {
//   const [formData, setFormData] = useState({
//     itemName: "",
//     price: "",
//     image: null,
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate(); // Initialize useNavigate

//   const validate = () => {
//     let tempErrors = {};
//     if (!formData.itemName) tempErrors.itemName = "Item name is required.";
//     if (!formData.price) tempErrors.price = "Price is required.";
//     else if (formData.price <= 0) tempErrors.price = "Price must be greater than zero.";
//     if (!formData.image) tempErrors.image = "Image is required.";
//     return tempErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length === 0) {
//       // If no errors, proceed with form submission logic
//       console.log("Form Data Submitted:", formData);
//       alert("Item saved successfully!");
//       navigate("/Home"); // Navigate to the Home page
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${AdminLogin})` }}
//     >
//       <div className="w-full max-w-md bg-white bg-opacity-70 p-4 rounded-lg shadow-lg backdrop-blur-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Edit Item</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Item Name Input */}
//           <div>
//             <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
//               Item Name
//             </label>
//             <input
//               type="text"
//               id="itemName"
//               name="itemName"
//               value={formData.itemName}
//               onChange={handleChange}
//               className={`mt-1 block w-full px-4 py-2 border ${
//                 errors.itemName ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//               required
//             />
//             {errors.itemName && (
//               <p className="text-xs text-red-500 mt-1">{errors.itemName}</p>
//             )}
//           </div>

//           {/* Price Input */}
//           <div>
//             <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//               Price
//             </label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className={`mt-1 block w-full px-4 py-2 border ${
//                 errors.price ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
//               required
//             />
//             {errors.price && (
//               <p className="text-xs text-red-500 mt-1">{errors.price}</p>
//             )}
//           </div>

//           {/* Image Input */}
//           <div>
//             <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//               Image
//             </label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleChange}
//               className={`mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border ${
//                 errors.image ? "file:border-red-500" : "file:border-gray-300"
//               } file:bg-gray-100 file:text-sm file:text-gray-700 hover:file:bg-gray-200`}
//               required
//             />
//             {errors.image && (
//               <p className="text-xs text-red-500 mt-1">{errors.image}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-red-600 px-8 py-2 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
//           >
//             Save Item
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ItemEdit;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from '../../assets/Images/AdminLogin.jpg';

const ItemEdit = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    price: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!formData.itemName) tempErrors.itemName = "Item name is required.";
    if (!formData.price) tempErrors.price = "Price is required.";
    else if (formData.price <= 0) tempErrors.price = "Price must be greater than zero.";
    if (!formData.image) tempErrors.image = "Image is required.";
    return tempErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
      alert("Item saved successfully!");
      navigate("/Home");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${AdminLogin})` }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-70 p-4 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.itemName ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              required
            />
            {errors.itemName && <p className="text-xs text-red-500 mt-1">{errors.itemName}</p>}
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.price ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              required
            />
            {errors.price && <p className="text-xs text-red-500 mt-1">{errors.price}</p>}
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className={`mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border ${
                errors.image ? "file:border-red-500" : "file:border-gray-300"
              } file:bg-gray-100 file:text-sm file:text-gray-700 hover:file:bg-gray-200`}
              required
            />
            {errors.image && <p className="text-xs text-red-500 mt-1">{errors.image}</p>}
          </div>

          <button
            type="submit"
            className="bg-red-600 px-8 py-2 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
          >
            Save Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemEdit;