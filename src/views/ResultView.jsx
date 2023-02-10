import { jsRunner, renderMsg } from '../engine/run';
import { useLog } from '../engine/hooks';
import { useState } from 'react';
import { useCallback } from 'react';
import { snippets } from '../engine/suggestions';
import { useMemo } from 'react';
import { useEffect } from 'react';
import Fab from '../components/Fab';
import Run from '../components/Run';


const ResultsView = ({ code, theme, columnLayout, showSnip }) => {
  const { logMessages: msg, errors, warnings } = useLog();
  const [safeRun, setSafeRun] = useState(true);
  const [loopErr, setLoopErr] = useState(null);

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

  const output = handleInfiniteLoop(code)
  // const output = jsRunner(code);

  const showConsoleName = !output && errors.length === 0 && warnings.length === 0;

  const onFabClick = useCallback(() => {
    setSafeRun(true)
    setLoopErr(null)
  }, []);

  return (
    <div className={`h-1/2 w-full ${columnLayout ? `sm:h-full sm:w-1/2 sm:border-0` : `sm:h-1/2 sm:w-full sm:pane-border`} pane-border bg-white text-white dark:bg-neutral-900 `}>
      <div className="output-text flex max-h-full flex-col overflow-auto px-3">

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

        {!output && !loopErr && (
          <div className="console-output py-1 font-semibold text-green-600 dark:font-normal dark:text-lime-400">
            {msg.length
              ? renderMsg(msg, theme)
              : showConsoleName && (
                <>
                  <div className="output-text-primary text-neutral-500 dark:text-neutral-300">
                    <span className="font-bold text-lime-600 dark:text-lime-400">{`>_ `}</span>{' '}
                    Console Output
                  </div>
                </>
              )}
          </div>
        )}

        {showSnip && !loopErr && <div className="mt-4 text-sm ">
          <div className="dark:text-lime-500 text-lime-600 font-semibold dark:font-normal">Javascript snippet shortcuts to code faster !</div>
          {
            snippets.map(item => {
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
      
    </div>
  );
};

export default ResultsView;
