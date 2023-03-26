import React from 'react'
import $ from '../themes/constants'

function LayoutsIcon({theme,layout,className,...props}) {
  return (
    <svg
      
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={theme === $.DARK ? "orange" : "black"}
      strokeWidth={theme === $.DARK ? 1.5 : 1}
      strokeLinecap="round"
      {...props}
      className={`${className} ${layout === $.COLUMNS && 'rotate-90'}`}
    >
      <rect x={2} y={2} width={20} height={20} rx={0} />
      <path d="M12 2L12 22" />
    </svg>
  )
}

export default LayoutsIcon