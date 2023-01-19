
import { useState } from "react";
import { useEditor } from "../engine/hooks";

import dark from '../assets/dark.svg'
import light from '../assets/light.svg'

import CodeView from "../views/CodeView"
import ResultsView from "../views/ResultView"
import $ from '../themes/constants'
import { useCallback } from "react";

const Main = () => {

  

  const [codeString, setCodeString] = useState('// Start writing your code...');
  const [theme,setTheme] = useState($.DARK);

  useEditor()

  const toggleTheme = useCallback(()=>{
    setTheme(prev => {
      if(prev === $.LIGHT) return $.DARK;
      return $.LIGHT;
    })
  },[]);

  const btnTitle = theme === $.DARK ? "Switch to light theme" : "Switch to dark theme" ;

  return <div className={`flex flex-col w-full h-screen justify-start ${theme}`}>

    <div className="header flex justify-between items-center 
        font-semibold bg-white dark:bg-neutral-800 dark:text-white py-3 
        px-4 shadow-xl border-b border-opacity-30 border-neutral-400 dark:border-neutral-700">
      <div><span className="bg-yellow-400 rounded text-black font-bold px-1 mr-1">JS</span>Play <sub className="text-1  text-neutral-500 dark:text-neutral-400">_by_shubham</sub></div>
      <div className="icon-btns flex items-center">
        <button title={btnTitle} className="m-0 p-1 dark:hover:bg-neutral-600  hover:bg-neutral-300 rounded-full" type="button" onClick={toggleTheme}>
          <img src={theme === $.DARK ? light : dark}  className="h-4 dark-icon" />
          </button>
      </div>
    </div>

    <div className="flex sm:flex-row flex-col work-space w-full flex-1 justify-between items-center">
      <CodeView onChange={setCodeString} value={codeString} theme={theme} />
      <ResultsView code={codeString} theme={theme}/>
    </div>

  </div>


}

export default Main