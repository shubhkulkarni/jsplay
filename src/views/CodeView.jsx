import MonacoEditor from '@monaco-editor/react';
import React from 'react';
import useGlobal from '../state';
export const langMap = {
  'js':'javascript',
  'java':'java',
  'py':'python'
}
const CodeView = (props) => {
  const [state,{setState}] = useGlobal();
  return (
    <div className={`editor-main h-1/2 w-full ${props.console ? (props.columnLayout ? `sm:h-full sm:w-1/2` :`sm:h-1/2 sm:w-full`) : 'h-full w-full'} `}>
      <MonacoEditor {...props} language={langMap[state.language]} />
    </div>
  );
};

export default React.memo(CodeView);
