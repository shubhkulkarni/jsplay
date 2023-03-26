import { useState } from 'react';
import { useEditor} from '../engine/hooks';
import CodeView from '../views/CodeView';
import ResultsView from '../views/ResultView';
import $ from '../themes/constants';
import { useCallback } from 'react';
import {js_beautify} from 'js-beautify';
import Storage from '../engine/storage';
import { useEffect } from 'react';
import _debounce from 'lodash/debounce';
import Settings from '../components/Settings';
import useGlobal from '../state';
import { starterCode, starterCodeVals } from '../views/langData';



const storage = new Storage({type: localStorage, async: false});

const Main = () => {
  
  const [theme, setTheme] = useState($.DARK);
  const [saved,setSaved] = useState(false);
  const [layout,setLayout] = useState($.COLUMNS);
  const [copied,setCopied] = useState(false);
  const [showSnip,setShowSnip] = useState(true);
  const [showConsole,setShowConsole] = useState(true);
  const [state,{setState}] = useGlobal();

  const [codeString, setCodeString] = useState(`// Start writing your code ex. console.log("Hello World!");`)
  
  useEditor(state.language);
  
  const columnLayout = layout === $.COLUMNS;

  const debounceFn = useCallback(_debounce(handleDebounceFn, 3000), []);

  function handleDebounceFn(val) {
    storage.set($.CODE,val);
    setSaved(true);
    setCopied(false);
  }

  
  useEffect(()=>{
    const lang = storage.get($.LANG);
    if(lang) setState('language',lang)
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
    setState("marker","")
    setState("markerLine","")
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
            layout={layout}
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
        <CodeView onChange={onEditorChange} 
          options={{
            mouseWheelZoom:true,
            fontLigatures:true,
            fontFamily:"Fira Code",
            autoIndent:true,
            'bracketPairColorization.enabled':true,
            'bracketPairColorization.independentColorPoolPerBracketType':true,
            cursorSmoothCaretAnimation:'on',
            smoothScrolling: true,
            fontWeight:300,
            lineHeight:21,
            
          }}
          console={showConsole} value={codeString} theme={theme} columnLayout={columnLayout} />
        <ResultsView console={showConsole} code={codeString} theme={theme} columnLayout={columnLayout} showSnip={showSnip}/>
      </div>
    </div>
  );
};

export default Main;
