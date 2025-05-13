


import React from 'react';
import backgroundImage from "../assets/image.png";

const DataPage = ({ submittedData }) => {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-4 m-4 border border-gray-300">
      <h2 className="text-white text-lg font-semibold mb-2">Submitted Pets</h2>
      <table className="w-full text-white text-sm">
        <thead>
          <tr>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Type</th>
            <th className="border px-2 py-1">Breed</th>
            <th className="border px-2 py-1">Owner</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Phone</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((pet, idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1">{pet.petName}</td>
              <td className="border px-2 py-1">{pet.petType}</td>
              <td className="border px-2 py-1">{pet.breed}</td>
              <td className="border px-2 py-1">{pet.ownerName}</td>
              <td className="border px-2 py-1">{pet.email}</td>
              <td className="border px-2 py-1">{pet.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPage;
