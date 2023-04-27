import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Enroll() {

  const [course, setCourse] = useState('Java');
  const [hours, setHours] = useState('2');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/enroll', { course, hours })
      .then((response) => {
        navigate("/schedule")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="course">
            Course
          </label>
          <select value={course}
            onChange={(event) => setCourse(event.target.value)}
            id="course"
            name="course"
            className="form-select block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" >
            <option value="Java">Java</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="hours">
            Hours willing to commit
          </label>
          <select value={hours}
            onChange={(event) => setHours(event.target.value)}
            id="hours"
            name="hours"
            className="form-select block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="2">2 hours per day</option>
            <option value="4">4 hours per day</option>
            <option value="6">6 hours per day</option>
          </select>
        </div>
        <div className="mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Enroll
          </button>
        </div>
      </form>
    </div>

  );
}

export default Enroll;
