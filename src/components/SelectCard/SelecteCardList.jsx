import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import SelectCard from './SelectCard'

function SelecteCardList({selectedLang,list,onSelect}) {

  return (
    <ul className='w-full'>
        {list.map(item =>{
            return <SelectCard tag={item.tag} tagUse={item.use} icon={item.key} isSelected={item.key===selectedLang} key={item.key} onClick={onSelect(item.key)} name={item.name} />
        })}
    </ul>
  )
}

export default SelecteCardList