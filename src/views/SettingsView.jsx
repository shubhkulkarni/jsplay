import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import CrossIcon from '../components/CrossIcon'

import SelecteCardList from '../components/SelectCard/SelecteCardList'
import Storage from '../engine/storage';
import useGlobal from '../state'
import $ from '../themes/constants';
import { supportedLanguages } from './langData';

const storage = new Storage({type: localStorage, async: false});

function SettingsView() {
  const [state,{setState}] = useGlobal();

const [selectedLang,setSelectedLang] = useState(state.language);



const onSelect = useCallback((key) => {
      return () => setSelectedLang(key)
},[]);

  
  const onModalDismiss = useCallback(
    () => {
     setState('modalOpen',false);
    },
    [],
  )

  const onApplyLanguage = useCallback((lang)=>{
    return () => {
    setState('language',lang);
    setState("err",null);
    setState("output",null)
    storage.set($.LANG,lang)
    onModalDismiss();
  }
  },[]);
 
  return (
    <div className='flex flex-col items-start justify-start w-full '>
        <div className="flex justify-between items-center mb-8 w-full">
        <div className="title ">Choose your language</div>
        <button className="" onClick={onModalDismiss}>
          <CrossIcon className="h-5"></CrossIcon>
        </button>
        </div>
        <SelecteCardList list={supportedLanguages} selectedLang={selectedLang} onSelect={onSelect}/>

        <button onClick={onApplyLanguage(selectedLang)} className='hover:ring dark:ring-yellow-600 ring-yellow-300 px-4 py-2 self-end text-red-900 bg-yellow-200 rounded-lg mt-4'>Apply</button>
    </div>
  )
}

export default SettingsView