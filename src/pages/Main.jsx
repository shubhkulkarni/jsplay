import { useState } from 'react';
import { useEditor } from '../engine/hooks';
import CodeView from '../views/CodeView';
import ResultsView from '../views/ResultView';
import $ from '../themes/constants';
import { useCallback } from 'react';
import {js_beautify} from 'js-beautify';
import Storage from '../engine/storage';
import { useEffect } from 'react';
import _debounce from 'lodash/debounce';
import rowsLight from '../assets/rows.svg';
import columnsLight from '../assets/columns.svg';
import rowsDark from '../assets/rowsDark.svg';
import columnsDark from '../assets/columnsDark.svg';
import Settings from '../components/Settings';


const storage = new Storage({type: localStorage, async: false});

const Main = () => {
  const [codeString, setCodeString] = useState('// Start writing your code ex. console.log("Hello World!");');
  const [theme, setTheme] = useState($.DARK);
  const [saved,setSaved] = useState(false);
  const [layout,setLayout] = useState($.COLUMNS);
  const [copied,setCopied] = useState(false);
  const [showSnip,setShowSnip] = useState(true);
  const [showConsole,setShowConsole] = useState(true);
  useEditor();

  const columnLayout = layout === $.COLUMNS;

  const lightLayoutSrc = columnLayout ? rowsLight : columnsLight ;
  const darkLayoutSrc = columnLayout ? rowsDark : columnsDark ;

  const debounceFn = useCallback(_debounce(handleDebounceFn, 3000), []);

  function handleDebounceFn(val) {
    storage.set($.CODE,val);
    setSaved(true);
    setCopied(false);
  }


  useEffect(()=>{
    const codeStr = storage.get($.CODE);
    if(codeStr) setCodeString(codeStr);
    const lyt = storage.get($.LAYOUT);
    if(lyt) setLayout(lyt);
    const theme = storage.get($.THEME);
    if(theme) setTheme(theme);
  },[]);

  const toggleTheme = useCallback(() => {

    setTheme((prev) => {
      if (prev === $.LIGHT) {
        storage.set($.THEME,$.DARK);
        return $.DARK;
      }else{
        storage.set($.THEME,$.LIGHT);
        return $.LIGHT;
      }
    });

  }, []);

  const onPrettify = useCallback(() => {
    setCodeString(prev => {
      return js_beautify(prev, { preserve_newlines: true,max_preserve_newlines:2});
    });
    setCopied(false);
  },[]);

  const onLayoutChange = useCallback(() => {
    setLayout((prev) => {
      if (prev === $.COLUMNS) {
        storage.set($.LAYOUT,$.ROWS);
        return $.ROWS;
      }else{
        storage.set($.LAYOUT,$.COLUMNS);
        return $.COLUMNS;
      }

    });
    
  },[]);

  const toggleSnip = useCallback(()=>{
    setShowSnip(prev => !prev)
},[]);

  const onEditorChange = useCallback(val => {
    setSaved(false);
    setCopied(false);
    setCodeString(val);
    debounceFn(val);
    setShowSnip(false);
  },[debounceFn]);
  
  const onChangeConsole = useCallback(() => {
      setShowConsole(prev => !prev);
  },[]);

  const btnTitle = theme === $.DARK ? 'Switch to light theme' : 'Switch to dark theme';
  
  return (
    <div className={`flex h-screen w-full flex-col justify-start ${theme}`}>
      <div
        className="header z-10 flex items-center justify-between 
        border-b border-neutral-400 border-opacity-30 bg-white py-3 
        px-4 font-semibold shadow dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
      >
        <div>
          <span className="mr-1 rounded bg-yellow-400 px-1 font-bold text-black">JS</span>
          Play{' '}
          <sub className="text-1  text-neutral-500 dark:text-neutral-400">
           <a href='https://github.com/shubhkulkarni' target={"_blank"}>_by_shubham</a> 
          </sub>
        </div>

        <Settings saved={saved} theme={theme} 
            darkLayoutSrc={darkLayoutSrc}
            lightLayoutSrc={lightLayoutSrc}
            btnTitle={btnTitle}
            toggleTheme={toggleTheme}
            onLayoutChange={onLayoutChange}
            onPrettify={onPrettify}
            code={codeString}
            copy={[copied,setCopied]}
            setSaved={setSaved}
            onSnipChange={toggleSnip}
            onChangeConsole={onChangeConsole}
            console={showConsole}
          />
      </div>

      <div className={`work-space flex-column ${columnLayout ? `sm:flex` : `sm:flex-column`} w-full flex-1 items-center justify-between `}>
        <CodeView onChange={onEditorChange} console={showConsole} value={codeString} theme={theme} columnLayout={columnLayout} />
        <ResultsView console={showConsole} code={codeString} theme={theme} columnLayout={columnLayout} showSnip={showSnip}/>
      </div>
    </div>
  );
};

export default Main;
