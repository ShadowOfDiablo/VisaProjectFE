import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Login</button>
        </form>
        <p className="mt-6 text-center text-gray-600">Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
