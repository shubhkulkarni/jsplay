import React from 'react'
import Chip from '../Chip/Chip'
import JAVA from "../../assets/java.jsx";
import JS from "../../assets/js.jsx";
import PY from "../../assets/py.jsx";
import TS from "../../assets/ts.jsx";

const renderIcon = key => {
  switch(key){
    case "js": return <JS className="h-6 mr-5"/>
    case "ts": return <TS className="h-6 mr-5"/>
    case "java": return <JAVA className="h-6 mr-5"/>
    case "py": return <PY className="h-6 mr-5"/>
  }
  
}
//ring-2 ring-yellow-400 dark:ring-yellow-500 dark:ring-opacity-60
function SelectCard({ name, icon, isSelected,tag,tagUse, ...props }) {

  return (
    <div {...props} className={`mb-2 py-2 px-4 rounded-lg w-full
    cursor-pointer flex justify-between items-center dark:border ${!isSelected && ' border-transparent '} ${isSelected && 'dark:bg-lime-900 dark:bg-opacity-50 bg-sky-100 dark:border border-lime-700'}`}>
      <div className="flex justify-start items-center">
        <div className="">
          {renderIcon(icon)}
        </div>
        <div className="">{name}</div>
      </div>
      <div className="">
        <Chip title={tag} use={tagUse}/>
      </div>
    </div>
  )
}

export default SelectCard