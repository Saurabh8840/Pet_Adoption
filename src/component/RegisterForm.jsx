// import React ,{useState} from "react";


// const RegisterForm = ({onSubmit}) => {

//     const [formData,setFormData]=useState({
//         petName:'',
//         petType:'',
//         breed:'',
//         ownerName:'',
//         email:'',
//         phone:''

//     });

//     const handleChange=(e)=>{
//         setFormData((prev)=>({
//             ...prev,
//             [e.target.name]:e.target.value
//         }));
//     };

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         onSubmit(formData);
//         setFormData({
//             petName:'',
//             petType:'',
//             breed:'',
//             ownerName:'',
//             email:'',
//             phone:''
//         });
//     };

//    return(
//     <form className="space-y-1" onsubmit={handleSubmit}>
//         <h2 className="text-xl font-bold text-center mb-2 text-white ">Register Your Pet</h2>

//         <div>
//             <label className="block text-white mb-1">Pet Name</label>
//              <input 
//              type="text"
//              name="petName"
//              value={formData.petName}
//              onChange={handleChange}
//              className="w-full p-1 rounded border  focus:outline-none focus:ring focus:border-blue-500 " 
//              required
//              />
//         </div>

//         <div>
//             <label className="block text-white mb-1">Pet Type</label>
//              <input 
//              type="text"
//              name="petType"
//              value={formData.petType}
//              onChange={handleChange}
//              className="w-full p-1 rounded border  focus:outline-none focus:ring focus:border-blue-500 " 
//              required
//              />
//         </div>

//         <div>
//             <label className="block text-white mb-1">Breed</label>
//              <input 
//              type="text"
//              name="breed"
//              value={formData.breed}
//              onChange={handleChange}
//              className="w-full p-1 rounded border  focus:outline-none focus:ring focus:border-blue-500 " 
//              required
//              />
//         </div>

//         <div>
//             <label className="block text-white mb-1">Your Name</label>
//              <input 
//              type="text"
//              name="ownerName"
//              value={formData.ownerName}
//              onChange={handleChange}
//              className="w-full p-1 rounded border  focus:outline-none focus:ring focus:border-blue-500 " 
//              required
//              />
//         </div>

//         <div>
//             <label className="block text-white mb-1">Email</label>
//              <input 
//              type="email"
//              name="email"
//              value={formData.email}
//              onChange={handleChange}
//              className="w-full p-1 rounded border  focus:outline-none focus:ring focus:border-blue-500 " 
//              required
//              />
//         </div>

//         <div>
//             <label className="block text-white mb-1">Phone</label>
//              <input 
//              type="tel"
//              name="phone"
//              value={formData.phone}
//              onChange={handleChange}
//              className="w-full p-1 rounded border  focus:outline-none focus:ring focus:border-blue-500 " 
//              required
//              />
//         </div>

//         <button 
//         type="submit"
//         className="w-full bg-blue-500 hover:bg-blue-700 font-semibold py-2 rounded" >Submit</button>

//     </form>
//    )

// }

// export default RegisterForm;



import React, { useState } from 'react';

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    breed: '',
    ownerName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      petName: '',
      petType: '',
      breed: '',
      ownerName: '',
      email: '',
      phone: ''
    });
  };

  return (
    <form className="space-y-1" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold text-center mb-2 text-white">Register Your Pet</h2>

      {['petName', 'petType', 'breed', 'ownerName', 'email', 'phone'].map((field) => (
        <div key={field}>
          <label className="block text-white mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-1 rounded border focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 font-semibold py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
