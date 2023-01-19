import { useState } from 'react';
import { useEditor } from '../engine/hooks';

import dark from '../assets/dark.svg';
import light from '../assets/light.svg';

import CodeView from '../views/CodeView';
import ResultsView from '../views/ResultView';
import $ from '../themes/constants';
import { useCallback } from 'react';

const Main = () => {
  const [codeString, setCodeString] = useState('// Start writing your code...');
  const [theme, setTheme] = useState($.DARK);

  useEditor();

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === $.LIGHT) return $.DARK;
      return $.LIGHT;
    });
  }, []);

  const btnTitle = theme === $.DARK ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <div className={`flex h-screen w-full flex-col justify-start ${theme}`}>
      <div
        className="header flex items-center justify-between 
        border-b border-neutral-400 border-opacity-30 bg-white py-3 
        px-4 font-semibold shadow-xl dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
      >
        <div>
          <span className="mr-1 rounded bg-yellow-400 px-1 font-bold text-black">JS</span>
          Play{' '}
          <sub className="text-1  text-neutral-500 dark:text-neutral-400">
            _by_shubham
          </sub>
        </div>
        <div className="icon-btns flex items-center">
          <button
            title={btnTitle}
            className="m-0 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
            type="button"
            onClick={toggleTheme}
          >
            <img src={theme === $.DARK ? light : dark} className="dark-icon h-4" />
          </button>
        </div>
      </div>

      <div className="work-space flex w-full flex-1 items-center justify-between ">
        <CodeView onChange={setCodeString} value={codeString} theme={theme} />
        <ResultsView code={codeString} theme={theme} />
      </div>
    </div>
  );
};

export default Main;
