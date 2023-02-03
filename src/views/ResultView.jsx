import { renderMsg, runJS } from '../engine/run';
import { useLog } from '../engine/hooks';
import { useState } from 'react';
import { useCallback } from 'react';
import { snippets } from '../engine/suggestions';


const ResultsView = ({ code, theme, columnLayout, showSnip }) => {
  const { logMessages: msg, errors, warnings } = useLog();

  const output = runJS(code);

  const showConsoleName = !output && errors.length === 0 && warnings.length === 0;



  return (
    <div className={`h-1/2 w-full ${columnLayout ? `sm:h-full sm:w-1/2 sm:border-0` : `sm:h-1/2 sm:w-full sm:pane-border`} pane-border bg-white text-white dark:bg-neutral-900 `}>
      <div className="output-text flex max-h-full flex-col overflow-auto px-3">

        {output && (
          <div className="error rounded bg-red-200 p-1 px-2 font-semibold text-red-800 dark:bg-red-700 dark:bg-opacity-50 dark:font-normal dark:text-white">
            {output}
          </div>
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

        {!output && (
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

        {showSnip && <div className="mt-4 text-sm ">
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
      </div>
    </div>
  );
};

export default ResultsView;
