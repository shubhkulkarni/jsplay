import { jsRunner, renderMsg } from '../engine/run';
import { useLog } from '../engine/hooks';
import { useState } from 'react';
import { useCallback } from 'react';
import { snippets } from '../engine/suggestions/suggestions';
import Fab from '../components/Fab';
import useGlobal from '../state';
import $ from '../themes/constants';
import RunScript, { langMapForChip } from './RunScript';
import { renderNonJS } from '../engine/runNonJS';
import ts from "typescript";
import Chip from '../components/Chip/Chip';
import { langMap } from './CodeView';
import { snips } from './langData';

const ResultsView = ({ code, theme, columnLayout, showSnip,console }) => {
  const { logMessages: msg, errors, warnings } = useLog();
  const [safeRun, setSafeRun] = useState(true);
  const [loopErr, setLoopErr] = useState(null);
  const [state,{setState}] = useGlobal();
  
  const onInputChange = useCallback((e)=>{
    setState('codeInput',e.target.value)
  },[setState]);

  let output;
  const handleInfiniteLoop = useCallback(code => {
    let output = ''
    if (safeRun) {
      output = jsRunner(code)
    }
    if (output) {
      if (output.includes('potential infinite')) {
        setSafeRun(false)
        setLoopErr(output)
      }
      return output
    }
    return output
  }, [safeRun])


  if(state.language === $.JS){
    output = handleInfiniteLoop(code)
  }else if(state.language === $.TS){

    const transpiledCode = ts.transpile(code,{"target": "es2015",allowJs:true,
    "module": "commonjs",
    "sourceMap": true});
    
    const c = `!(function(){\n
    ${transpiledCode}
    \n})();`
    
    output = handleInfiniteLoop(c);

  }else{
    output = state.err || ""
  }
  
  const showConsoleName = !output && errors.length === 0 && warnings.length === 0;

  const onFabClick = useCallback(() => {
    setSafeRun(true)
    setLoopErr(null)
  }, []);
  const isJS = state.language === $.JS || state.language === $.TS;
  return (
    <div className={`h-1/2 w-full ${console ? (columnLayout ? `sm:h-full sm:w-1/2 sm:border-0` : `sm:h-1/2 sm:w-full sm:pane-border`) : 'hidden'} pane-border bg-white text-white dark:bg-neutral-900 flex flex-col justify-between`}>
      <div className="output-text flex max-h-full flex-col overflow-auto px-3">

        {!isJS && <RunScript theme={theme} code={code}/>}


        {output && (
          <div className="error rounded bg-red-200 p-1 px-2 font-semibold text-red-800 dark:bg-red-700 dark:bg-opacity-50 dark:font-normal dark:text-white">
            {output}
          </div>
        )}

        {loopErr && (<>
          <div className="error mb-2 rounded bg-red-200 p-1 px-2 font-semibold text-red-800 dark:bg-red-700 dark:bg-opacity-50 dark:font-normal dark:text-white">
            {loopErr}
          </div>
          <div className='ml-2 text-sm dark:text-lime-300 text-green-700 dark:font-normal font-semibold'>
            <b>Note : </b>Script execution is paused. Use ( Run ) '<span className="font-bold dark:text-yellow-400"> ▷ </span>' button to run the code again.
        </div></>
        )}

        {errors.length > 0 && !output && (
          <div className="error-ctr my-2 rounded bg-red-200 p-1 px-2 font-semibold text-red-800 dark:bg-red-700 dark:bg-opacity-50 dark:font-normal dark:text-white">
            {renderMsg(errors, theme)}
          </div>
        )}

        {warnings.length > 0 && !output && (
          <div
            className="warnings-ctr rounded
                 bg-yellow-200 p-1 px-2
                 font-semibold text-yellow-800 dark:bg-yellow-500 dark:bg-opacity-70 dark:font-normal dark:text-white"
          >
            {renderMsg(warnings, theme)}
          </div>
        )}

        {!isJS && state.output &&  renderNonJS(state.output)}

        {isJS && !output && !loopErr && (
          <div className="console-output py-1 font-semibold text-green-600 dark:font-normal dark:text-lime-400">
            {msg.length
              ? renderMsg(msg, theme)
              : showConsoleName && (
                <>
                  <div className="output-text-primary text-neutral-500 dark:text-neutral-300">
                    <span className="font-bold text-lime-600 dark:text-lime-400">{`>_ `}</span>{' '}
                    Console Output <Chip title={langMapForChip[state.language]} use={state.language}/>
                  </div>
                </>
              )}
          </div>
        )}

        { snips[state.language].length && showSnip && !loopErr && <div className="mt-4 text-sm ">
          <div className="dark:text-lime-500 text-lime-600 font-semibold dark:font-normal">{langMapForChip[state.language]} snippet shortcuts to code faster !</div>
          {
            snips[state.language].map(item => {
              return <div
                className="bg-neutral-400  bg-opacity-10 font-normal py-0.5 px-2 rounded dark:text-neutral-400 text-neutral-600 text-normal my-2 w-full grid grid-cols-2 grid-flow-col border-neutral-300 border-opacity-80 dark:border-neutral-700">
                <code className=''>
                  {item.label}
                </code>
                <span className="dark:font-normal font-semibold dark:text-lime-500 text-lime-600">{item.description}</span>
              </div>
            })
          }</div>}
          {!safeRun && <Fab onClick={onFabClick} />}
      </div>
      {!isJS && <div className="text-black flex flex-col py-2 px-3">
          <div className="output-text-primary mb-1 dark:font-normal font-semibold text-neutral-500 dark:text-neutral-300">Add code inputs here (in case of multiple inputs ,enter each at newline)</div>
          <textarea value={state.codeInput} onChange={onInputChange} className='dark:bg-neutral-900 dark:text-neutral-100 dark:font-normal font-semibold text-neutral-800 resize-none focus:outline-none border-2 border-neutral-300 dark:border-neutral-700 border-opacity-80 rounded-lg p-3' name="input-pane" id="input-pane" cols="30" rows="5"></textarea>
      </div>}
    </div>
  );
};

export default ResultsView;
