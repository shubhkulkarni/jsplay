import {  renderMsg, runJS } from "../engine/run"
import { useLog } from "../engine/hooks"



const ResultsView = ({ code,theme }) => {

    const {logMessages: msg,errors,warnings} = useLog()

    

    const output = runJS(code);

    const showConsoleName = !output && errors.length === 0 && warnings.length === 0;
    
    return <div className="bg-white  dark:bg-neutral-900  text-white w-1/2 h-full">
        <div className="output-text px-3 flex flex-col overflow-auto max-h-full">
            {/* <div className="text-neutral-300 py-0.5 pb-2">
                    <span className="text-lime-400 font-bold">{`>_ `}</span>  Console output</div> */}
            {output && <div className="error dark:text-white text-red-800 font-semibold dark:font-normal bg-red-200 dark:bg-red-700 dark:bg-opacity-50 p-1 px-2 rounded">
                {output}
            </div>}

            {errors.length > 0 && !output && <div className="error-ctr my-2 dark:text-white text-red-800 font-semibold dark:font-normal bg-red-200 dark:bg-red-700 dark:bg-opacity-50 p-1 px-2 rounded">
                {renderMsg(errors,theme)}
            </div>}

            {warnings.length > 0 && !output && <div className="warnings-ctr dark:text-white
                 text-yellow-800 font-semibold dark:font-normal
                 bg-yellow-200 dark:bg-yellow-500 dark:bg-opacity-70 p-1 px-2 rounded">
                    {renderMsg(warnings,theme)}
            </div>}



            {!output && <div className="console-output py-1 text-green-600 font-semibold dark:font-normal dark:text-lime-400">
                {msg.length ? renderMsg(msg,theme) : showConsoleName && <div className="text-neutral-500 dark:text-neutral-300">
                    <span className="text-lime-600 dark:text-lime-400 font-bold">{`>_ `}</span>  Console Output</div> }
            </div>}
            

        </div>


    </div>

}

export default ResultsView