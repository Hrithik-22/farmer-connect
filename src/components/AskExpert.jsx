import React from 'react'

function AskExpert() {
  return (
    <div className='col-start-2 col-end-4 flex gap-x-7 gap-y-3 flex-wrap '>
    <div className="card w-60 h-48 bg-slate-300 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">New Query</h2>
        </div>
    </div>
    <div className="card w-60 h-48 bg-slate-300 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Unresolved Query</h2>
        </div>
    </div>
    <div className="card w-60 h-48 bg-slate-300 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Resolved Query</h2>
        </div>
    </div>
    
    </div>
  )
}

export default AskExpert