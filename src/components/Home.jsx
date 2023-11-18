import React from 'react';

function Home() {
  return (
    <div className='col-start-2 col-end-4 flex gap-x-7 gap-y-3 flex-wrap '>
    <div className="card w-72 h-48 bg-slate-300 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Community Search</h2>
        </div>
    </div>
    <div className="card w-72 h-48 bg-slate-300 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">FAQ's by Warkem</h2>
        </div>
    </div>
    <div className="card w-72 h-48 bg-slate-300 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Ask Expert?</h2>
        </div>
    </div>
    <div className="card w-72 h-48 bg-slate-300 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">My Profile</h2>
        </div>
    </div>
    </div>
  )
}

export default Home;