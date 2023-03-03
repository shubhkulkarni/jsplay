import { loader } from '@monaco-editor/react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { themeData } from '../themes/dark1';
import { lightThemeData } from '../themes/light';
import { autoSuggestions } from './suggestions';

export const useLog = function () {
  const logBackup = console.log;
  const warnBackup = console.warn;
  const infoLog = console.info;
  const debugBackup = console.debug;
  const errBackup = console.error;
  const dirBackup = console.dir;
  const tableBackup = console.table;

  const logMessages = [];
  const warnings = [];
  const errors = [];

  console.log = function () {
    logMessages.push.apply(logMessages, arguments);
    logBackup.apply(console, arguments);
  };

  console.info = function () {
    logMessages.push.apply(logMessages, arguments);
    infoLog.apply(console, arguments);
  };

  console.warn = function () {
    warnings.push.apply(warnings, arguments);
    warnBackup.apply(console, arguments);
  };

  console.dir = function () {
    logMessages.push.apply(logMessages, arguments);
    dirBackup.apply(console, arguments);
  };

  console.debug = function () {
    logMessages.push.apply(logMessages, arguments);
    debugBackup.apply(console, arguments);
  };

  console.error = function () {
    errors.push.apply(errors, arguments);
    errBackup.apply(console, arguments);
  };

  console.table = function () {
    logMessages.push.apply(logMessages, arguments);
    tableBackup.apply(console, arguments);
  };

  return { logMessages, errors, warnings };
};


export const useEditor = () => {

  const suggestions = useCallback(
    autoSuggestions,
    [autoSuggestions],
  );

  useEffect(()=>{
    loader.init().then(monaco => {
      monaco.editor.defineTheme('dark', themeData);
      monaco.editor.defineTheme('light', lightThemeData);
      monaco.editor.bracketPairColorization = true;
      monaco.editor.scrollBeyondLastLine = false;
      // if(isFontListLoaded) {
        // monaco.editor.remeasureFonts()
      // }
      monaco.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems: () => {
          return {
            suggestions: suggestions(monaco)
          };
        }
      });
    });
  },[]);

};
