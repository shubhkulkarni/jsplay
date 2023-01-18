import { useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";
import { useState } from "react";
import { themeData } from "../themes/dark1";


import CodeView from "../views/CodeView"
import ResultsView from "../views/ResultView"

const Main = () => {


  const [codeString, setCodeString] = useState('// Start coding here to make wonders !');
  const monaco = useMonaco()

  if(monaco){
    monaco.editor.defineTheme('codePro-dark1',themeData)
  }
  
  return <div className="flex flex-col w-full h-screen overflow-auto justify-start">
    <div className="header bg-neutral-800 text-white py-3 pl-4 shadow-md border-b border-opacity-30 border-neutral-700">CodePRO</div>
    <div className="flex sm:flex-row flex-col h-full w-full flex-1 justify-between items-center">
      
        <CodeView onChange={setCodeString} value={codeString}  />
        <ResultsView code={codeString} />
      
    </div>
  </div>


}

export default Main