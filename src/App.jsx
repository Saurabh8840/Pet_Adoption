

import React, { useState } from 'react';
import backgroundImage from './assets/image.png';
import DataPage from './component/DataPage';
import RegisterForm from './component/RegisterForm';

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmittedData((prev) => [...prev, formData]);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 py-2 z-10">
        <h1 className="text-white text-3xl text-center">Pet Adoption Form</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[calc(100vh-3.5rem)] pt-20">
        <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg px-6 py-4 mx-auto max-w-sm w-full border border-gray-300">
          <RegisterForm onSubmit={handleFormSubmit} />
        </div>

        <div className="h-full overflow-y-auto">
          <DataPage submittedData={submittedData} />
        </div>
      </div>
    </div>
  );
};

export default App;
