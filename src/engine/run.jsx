import ReactJson from 'react-json-view';
import $ from '../themes/constants';
import { isCyclic } from './cyclicRef';

export const runJS = (code) => {
  try {
    return new Function(code)();
  } catch (err) {
    return String(err);
  }
};

export const renderMsg = (msg, theme) => {
  try {
    return msg.map((i) => {
      if (i === document)
        return (
          <pre
            
            className="border-b border-neutral-300 border-opacity-80 py-1.5 dark:border-neutral-700"
          >
            {JSON.stringify(i, null, 2)}
          </pre>
        );
      if (i === window)
        return (
          <div
            
            className="my-2 rounded bg-blue-100 p-1 px-2 text-blue-800 dark:bg-blue-800 dark:bg-opacity-50 dark:text-lime-400"
          >
            Please use <b>browser console</b> for viewing <b>window</b> object
          </div>
        );
      if (isCyclic(i))
        return (
          <div
            
            className="my-2 rounded bg-blue-100 p-1 px-2 text-blue-800 dark:bg-blue-800 dark:bg-opacity-50 dark:text-lime-400"
          >
            Please use <b>browser console</b>. This object has cyclic references
          </div>
        );

      if(i === null) {
          return <div
          className="border-b border-neutral-300 border-opacity-80 py-1.5 text-cyan-600 dark:border-neutral-700 dark:text-cyan-300"
        >
          {String(i)}
        </div>
      }

      if(i === undefined) {
        return <div
        className="border-b border-neutral-300 border-opacity-80 py-1.5 text-purple-600 dark:border-neutral-700 dark:text-purple-400"
      >
        {String(i)}
      </div>

      }

      if (typeof i === 'object') {
        return (
          <div
            
            className="border-b border-neutral-300 border-opacity-80 py-1.5 dark:border-neutral-700"
          >
            <ReactJson
              src={i}
              theme={theme === $.DARK ? 'summerfruit' : 'rjv-default'}
              iconStyle="circle"
              quotesOnKeys={false}
              collapsed={1}
              displayDataTypes={false}
              style={{ fontSize: '15px', fontWeight: 'normal' }}
              name={false}
            />
          </div>
        );
      }
      if (typeof i === 'number')
        return (
          <div
            
            className="border-b border-neutral-300 border-opacity-80 py-1.5 text-orange-700 dark:border-neutral-700 dark:text-orange-500"
          >
            {Number(i)}
          </div>
        );
      if (typeof i === 'boolean')
        return (
          <div
            
            className="border-b border-neutral-300 border-opacity-80 py-1.5 text-blue-700 dark:border-neutral-700 dark:text-blue-400"
          >
            {String(i)}
          </div>
        );
      return (
        <pre
          
          className="border-b border-neutral-300 border-opacity-80 py-1.5 dark:border-neutral-700"
        >
          {i}
        </pre>
      );
    });
  } catch (err) {
    return (
      <div  className="error rounded bg-red-800 bg-opacity-50 p-1 px-2 text-white">
        {String(err)}
      </div>
    );
  }
};
