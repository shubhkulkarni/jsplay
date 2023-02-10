import React from 'react'
import Run from './Run'

function Fab(props) {
  return (
    <button {...props} className="all-unset" title="Run your code">
    <div className='fab cursor-pointer hover:bg-yellow-500 fixed right-10 bottom-10 bg-yellow-400 rounded-full h-12 w-12 grid place-items-center shadow-md text-black'>
        <Run/>
    </div>
    </button>
  )
}

export default Fab