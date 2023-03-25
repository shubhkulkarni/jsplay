import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import Chip from '../components/Chip/Chip';
import Run from '../components/Run';
import { compilerService } from '../services/lang.service';
import useGlobal from '../state'
import $ from '../themes/constants'
import { langMap } from './CodeView';

export const langMapForChip = {
    js: "JavaScript",
    ts:"TypeScript",
    py:"Python",
    java: "Java"
}

function RunScript({theme,code}) {
const [state,{setState}] = useGlobal();
const [loading,setLoading] = useState(false);

const onRunCode = useCallback(async()=>{
    if(loading) return;
    try{
        setLoading(true)
        setState("err",null);
        setState("output",null)
        const response = await compilerService(code,state.codeInput,state.language);
        if(response.data.error){
            setState('err',response.data.error)
        }else{
            setState('err',null)
            setState('output',response.data.output)
        }
    }catch(err){
        setState('err',err.error)
    }finally{
        setLoading(false)
    }
    
},[compilerService,code,state.language,state.codeInput]);


  return (
    <div className='pt-2 text-black flex justify-between items-start console-output py-1 font-semibold text-green-600 dark:font-normal dark:text-lime-400'>
        <div className="output-text-primary text-neutral-500 dark:text-neutral-300">
                    <span className="font-bold text-lime-600 dark:text-lime-400">{`>_ `}</span>{' '}
                    Console Output <Chip title={langMapForChip[state.language]} use={state.language}/>
                  </div>
                  <div className="">
                    <button title='Execute your code' disabled={loading} onClick={onRunCode} className='dark:bg-lime-800 dark:text-lime-100 bg-yellow-200 text-red-900 py-1 rounded-lg px-3 flex justify-start items-center
                     hover:ring ring-yellow-400 dark:ring-lime-500'>
                    <span className="">{loading ? 'Running...' : 'Run' }</span><Run className='h-4' strokeWidth={2} stroke={theme === $.LIGHT ? '#7f1d1d' : '#d9f99d'}/>
                      </button>
                  </div>
        </div>
  )
}

export default RunScript