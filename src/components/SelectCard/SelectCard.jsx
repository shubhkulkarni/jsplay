import React from 'react'

function SelectCard({name,icon,isSelected,...props}) {
  
  return (
    <div {...props} className={`mb-2 py-2 px-4 rounded-lg bg-transparent w-full
    cursor-pointer flex justify-start items-center ${isSelected && 'ring-2 ring-yellow-400 dark:ring-yellow-500 dark:ring-opacity-60'}`}>
      <div className="">
        <img src={icon} alt={name} className="h-6 mr-5" />
      </div>
      <div className="">{name}</div>
      
      </div>
  )
}

export default SelectCard