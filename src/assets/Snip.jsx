import $ from "../themes/constants"

function SnipIcon({theme,...props}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={theme=== $.DARK ? 1.5 : 1.2} stroke={theme === $.DARK ? 'lightcyan' : 'black'}
        className="w-6 h-6"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    )
  }
  
  export default SnipIcon
  