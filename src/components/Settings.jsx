import React from 'react'
import $ from '../themes/constants'
import prettyLight from '../assets/pretty.svg'
import prettyDark from '../assets/pretty-dark.svg'
import dark from '../assets/dark.svg';
import light from '../assets/light.svg';
import { copyContent } from '../engine/copyToClipBoard';
import copyDark from "../assets/copyDark.svg";
import copyLight from "../assets/copyLight.svg";
import { useCallback } from 'react';

function Settings(props) {
  const {code,saved,theme,darkLayoutSrc,lightLayoutSrc,btnTitle,toggleTheme,onLayoutChange,onPrettify,copy,setSaved} = props;
  const [copied,setCopied] = copy;
  const onCopyText = useCallback(async ()=>{
        try{
          await copyContent(code);
          setCopied(true);
          setSaved(false);
        }catch(err){

        }
  },[copyContent,code,copy,setSaved]);

  return (
    <div className="icon-btns flex items-center">
          {saved && <div className="text-xs font-semibold sm:mr-4 mr-2 text-blue-700 dark:text-cyan-200">Changes saved !</div>}
          {copied && <div className="text-xs sm:mr-4 mr-2 text-blue-700 dark:text-lime-300">Code copied !</div>}
         

          <button
            title={"Change layout"}
            className="m-0 rounded-full p-1 sm:block  hover:bg-neutral-300 dark:hover:bg-neutral-600 hidden"
            type="button"
            onClick={onLayoutChange}
          >
            <img src={theme === $.DARK ? darkLayoutSrc : lightLayoutSrc} className="dark-icon h-5" />
          </button>

          <button
            title={"Copy code to clipboard"}
            className="m-0 sm:ml-3 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
            type="button"
            onClick={onCopyText}
          >
            <img src={theme === $.DARK ? copyDark : copyLight} className="dark-icon h-5" />
          </button>
          
          <button
            title={"Prettify your code"}
            className="m-0 sm:ml-3 ml-1 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
            type="button"
            onClick={onPrettify}
          >
            <img src={theme === $.DARK ? prettyLight : prettyDark} className="dark-icon h-5" />
          </button>

          <button
            title={btnTitle}
            className="m-0 sm:ml-3 ml-1 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
            type="button"
            onClick={toggleTheme}
          >
            <img src={theme === $.DARK ? light : dark} className="dark-icon h-5" />
          </button>

        </div>
  )
}

export default Settings