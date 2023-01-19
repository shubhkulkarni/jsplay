import MonacoEditor from '@monaco-editor/react';

const CodeView = (props) => {
  return (
    <div className="editor-main h-full w-1/2">
      <MonacoEditor {...props} defaultLanguage="javascript" />
    </div>
  );
};

export default CodeView;
