import React from 'react'
const useMap = {
    js:"bg-yellow-200 text-red-900 dark:bg-yellow-900 dark:bg-opacity-100 dark:text-white",
    ts:"bg-blue-400 text-white dark:bg-opacity-60 dark:bg-blue-700",
    java:"bg-sky-100 text-indigo-900 dark:bg-opacity-50 dark:bg-sky-700 dark:text-white",
    py:"bg-amber-200 text-indigo-600 dark:bg-blue-900 dark:text-amber-200",
    fullSupport:"bg-lime-100 text-emerald-900 dark:bg-lime-700 dark:bg-opacity-70 dark:text-white",
    experimental:"bg-red-100 text-red-900 dark:bg-amber-800 dark:bg-opacity-60 dark:text-white"
}
function Chip({title,use}) {
  return (
    <div className={`ml-1 inline opacity-1 px-3 py-0.5 rounded-full text-xs font-semibold ${useMap[use]}`}>{title}</div>
  )
}

export default Chip