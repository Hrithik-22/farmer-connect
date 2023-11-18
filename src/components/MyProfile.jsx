import React from 'react';

function MyProfile() {
  return (
    <div className='col-start-2 col-end-4 mr-8'>
      <div className="w-full bg-white shadow-xl p-4">
        <div className='bg-green-600 text-white p-4'>
          <h2 className='text-2xl'>
            Account Details
          </h2>
        </div>

        <div className='p-4'>
          <form>
            {/* Account Details */}
            <div className='grid grid-cols-2 gap-4 mb-4'>
              {renderInputField("Vendor ID", "vendorId")}
              {renderInputField("User ID", "userId")}
            </div>

            {/* Personal Details */}
            <div className='grid grid-cols-2 gap-4 mb-4'>
              {renderInputField("Full Name", "fullName")}
              {renderInputField("Password", "password")}
            </div>

            <div className='grid grid-cols-2 gap-4 mb-4'>
              {renderInputField("State", "state")}
              {renderInputField("City", "city")}
              {/* Add more form fields as needed */}
            </div>
            {/* Address Details */}
            <div className='grid grid-cols-1 gap-4 mb-4'>
              {renderInputField("Email", "email")}
              {/* {renderInputField("City", "city")} */}
              {/* Add more form fields as needed */}
            </div>
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Helper function to render input fields
function renderInputField(label, id) {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full border border-gray-300 p-2 rounded"
        type="text"
        id={id}
        name={id}
        required
      />
    </div>
  );
}

export default MyProfile;
