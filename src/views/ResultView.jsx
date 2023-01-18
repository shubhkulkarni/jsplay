import {  renderMsg, runJS } from "../engine/run"
import { useLog } from "../engine/useLog"



const ResultsView = ({ code }) => {

    const msg = useLog()

    const output = runJS(code);

    
    return <div className="bg-neutral-900 text-white w-1/2 h-full">
        <div className="output-text px-3 flex flex-col ">
            {output && <div className="error text-white bg-red-800 bg-opacity-50 p-1 px-2 rounded">
                {output}
            </div>}
            <div className="console-output py-1 text-lime-400">
                {renderMsg(msg)}
            </div>

        </div>


    </div>

}

export default ResultsView