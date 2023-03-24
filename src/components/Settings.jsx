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
import snipDark from '../assets/snipDark.svg';
import snipLight from '../assets/snipLight.svg'
import HideConsole from './HideConsole';
import ShowConsole from './ShowConsole';
import SettingsIcon from './SettingsIcon';
import { useState } from 'react';
import Modal from './Modal/Modal';
import SelecteCardList from './SelectCard/SelecteCardList';
import SettingsView from '../views/SettingsView';
import useGlobal from '../state';


function Settings(props) {
  const {code,saved,theme,darkLayoutSrc,lightLayoutSrc,btnTitle,toggleTheme,onLayoutChange,onPrettify,copy,setSaved,
    onChangeConsole,onSnipChange,console} = props;
  const [copied,setCopied] = copy;
  const [state,{setState}] = useGlobal();

  const onSettingsOpen = useCallback(()=>{
    setState('modalOpen',true);
  },[]);

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
          {saved && <div className="text-xs sm:block hidden font-semibold sm:mr-4 mr-2 text-blue-700 dark:text-cyan-200">Changes saved !</div>}
          {copied && <div className="text-xs sm:block hidden sm:mr-4 mr-2 text-blue-700 dark:text-lime-300">Code copied !</div>}

          <button
            title={console ? 'Hide Console Output' : 'Show Console Output'}
            className="m-0 sm:ml-3 rounded-full p-1 hover:bg-neutral-300 dark:hover:bg-neutral-600 "
            type="button"
            onClick={onChangeConsole}
          >
            {!console ? <ShowConsole className='h-5' theme={theme} /> :<HideConsole className='h-5' theme={theme}/>}
          </button>

          <button
            title={"Show / Hide snippets"}
            className="m-0 sm:ml-3 ml-1 rounded-full p-1 sm:block  hover:bg-neutral-300 dark:hover:bg-neutral-600 hidden"
            type="button"
            onClick={onSnipChange}
          >
            <img src={theme === $.DARK ? snipDark : snipLight} className="dark-icon h-5" />
          </button>

          <button
            title={"Change layout"}
            className="m-0 sm:ml-3 rounded-full p-1 sm:block  hover:bg-neutral-300 dark:hover:bg-neutral-600 hidden"
            type="button"
            onClick={onLayoutChange}
          >
            <img src={theme === $.DARK ? darkLayoutSrc : lightLayoutSrc} className="dark-icon h-5" />
          </button>

          <button
            title={"Copy code to clipboard"}
            className="m-0 sm:ml-3 ml-1 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
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
            title={"Settings"}
            className="m-0 sm:ml-3 ml-1 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
            type="button"
            onClick={onSettingsOpen}
          >
            <SettingsIcon theme={theme} className='h-5'/>
          </button>

          <button
            title={btnTitle}
            className="m-0 sm:ml-3 ml-1 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
            type="button"
            onClick={toggleTheme}
          >
            <img src={theme === $.DARK ? light : dark} className="dark-icon h-5" />
          </button>
          <Modal open={state.modalOpen}>
            <SettingsView/>
          </Modal>
        </div>
  )
}

export default Settings