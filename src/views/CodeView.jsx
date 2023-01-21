import MonacoEditor from '@monaco-editor/react';
import React from 'react';

const CodeView = (props) => {
  return (
    <div className={`editor-main h-1/2 w-full ${props.columnLayout ? `sm:h-full sm:w-1/2` :`sm:h-1/2 sm:w-full`} `}>
      <MonacoEditor {...props} defaultLanguage="javascript" />
    </div>
  );
};

export default React.memo(CodeView);
