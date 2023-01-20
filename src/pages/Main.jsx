import { useState } from 'react';
import { useEditor } from '../engine/hooks';

import dark from '../assets/dark.svg';
import light from '../assets/light.svg';

import CodeView from '../views/CodeView';
import ResultsView from '../views/ResultView';
import $ from '../themes/constants';
import { useCallback } from 'react';
import prettyLight from '../assets/pretty.svg'
import prettyDark from '../assets/pretty-dark.svg'
import {js_beautify} from 'js-beautify';
import Storage from '../engine/storage';
import { useEffect } from 'react';
import _debounce from 'lodash/debounce';


const storage = new Storage({type: localStorage, async: false});

const Main = () => {
  const [codeString, setCodeString] = useState('// Start writing your code...');
  const [theme, setTheme] = useState($.DARK);
  const [saved,setSaved] = useState(false);

  useEditor();

  const debounceFn = useCallback(_debounce(handleDebounceFn, 3000), []);

  function handleDebounceFn(val) {
    storage.set($.CODE,val);
    setSaved(true);
  }


  useEffect(()=>{
    const codeStr = storage.get($.CODE);
    if(codeStr) setCodeString(codeStr);
  },[]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === $.LIGHT) return $.DARK;
      return $.LIGHT;
    });
  }, []);

  const onPrettify = useCallback(() => {
    setCodeString(prev => {
      return js_beautify(prev, { preserve_newlines: false});
    })
    
  },[]);

  const onEditorChange = useCallback(val => {
    setSaved(false);
    setCodeString(val);
    debounceFn(val);
  },[]);

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
          {saved && <div className="text-xs mr-4 text-blue-700 dark:text-neutral-200">Changes saved !</div>}
          <button
            title={"Prettify your code"}
            className="m-0 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
            type="button"
            onClick={onPrettify}
          >
            <img src={theme === $.DARK ? prettyLight : prettyDark} className="dark-icon h-5" />
          </button>

          <button
            title={btnTitle}
            className="m-0 ml-2 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
            type="button"
            onClick={toggleTheme}
          >
            <img src={theme === $.DARK ? light : dark} className="dark-icon h-5" />
          </button>

        </div>
      </div>

      <div className="work-space flex w-full flex-1 items-center justify-between ">
        <CodeView onChange={onEditorChange} value={codeString} theme={theme} />
        <ResultsView code={codeString} theme={theme} />
      </div>
    </div>
  );
};

export default Main;
