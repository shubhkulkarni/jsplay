import { renderMsg, runJS } from '../engine/run';
import { useLog } from '../engine/hooks';

const ResultsView = ({ code, theme }) => {
  const { logMessages: msg, errors, warnings } = useLog();

  const output = runJS(code);

  const showConsoleName = !output && errors.length === 0 && warnings.length === 0;

  return (
    <div className="h-full  w-1/2  bg-white text-white dark:bg-neutral-900">
      <div className="output-text flex max-h-full flex-col overflow-auto px-3">
        {/* <div className="text-neutral-300 py-0.5 pb-2">
                    <span className="text-lime-400 font-bold">{`>_ `}</span>  Console output</div> */}
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
                  <div className="text-neutral-500 dark:text-neutral-300">
                    <span className="font-bold text-lime-600 dark:text-lime-400">{`>_ `}</span>{' '}
                    Console Output
                  </div>
                )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsView;
