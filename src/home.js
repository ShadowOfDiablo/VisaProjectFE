import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-4xl flex flex-col md:flex-row items-center">
        <img 
          src="https://via.placeholder.com/300" 
          alt="Example"
          className="w-full md:w-1/2 rounded-lg shadow-2xl mb-6 md:mb-0 md:mr-6"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to the Dark Themed Home Page</h1>
          <p className="mb-6">
            Text
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
