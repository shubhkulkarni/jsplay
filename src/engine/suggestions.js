export const autoSuggestions = monaco => {
    
    return([
    {
        label: 'clg',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Log values to console output',
        insertText: `console.log();`
    },
    {
        label: 'forloop',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'For loop',
        insertText: [
            'for(let i= a; i < b; i++){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'forinloop',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'For-in loop',
        insertText: [
            'for(let i in arr){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'forofloop',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'For-of loop',
        insertText: [
            'for(let i of arr){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'whileloop',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'While loop',
        insertText: [
            'while(condition){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'dowhileloop',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Do-while loop',
        insertText: [
            'do{',
            '\t',
            '}while(condition);'].join('\n')
    },
    {
        label: 'arrow1func',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Arrow function single line',
        insertText: 'const func = a =>  ;',
    },
    {
        label: 'arrow2func',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Arrow function',
        insertText: [
            'const func = (a,b) => {',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'normalFunc',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Normal function declaration',
        insertText: [
            'function doSomeThing(a){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'funcExpression',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Function expression',
        insertText: [
            'const func = function(a){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'asyncarrow1func',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Async arrow function single line',
        insertText: 'const func = async a =>  ;',
    },
    {
        label: 'asyncarrow2func',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Async arrow function',
        insertText: [
            'const func = async (a,b) => {',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'asyncnormalFunc',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Async function declaration',
        insertText: [
            'async function(a){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'arr',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create an empty array',
        insertText: `const arr = [];`
    },
    {
        label: 'ifblock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'If condition block',
        insertText: [
            'if(condition){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'elseblock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Else condition block',
        insertText: [
            'else{',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'ifelseblock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'If-else condition block',
        insertText: [
            'if(condition){',
            '\t',
            '} else {',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'elseifblock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Else-if condition block',
        insertText:  [
            'else if(condition){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'trycatchblock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Try-catch blocks',
        insertText:  [
            'try{',
            '\t',
            '} catch(error) {',
            '\t',
            '}'        
        ].join('\n')
    },
    {
        label: 'finallyblock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Finally block',
        insertText:  [
            'finally {',
            '\t',
            '}'
        ].join('\n')
    },
    {
        label: 'constructorblock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Constructor',
        insertText:  [
            'constructor(){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'classwithconstructor',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Class with constructor',
        insertText:  [
            'class ABC {',
            '\t',
            'constructor(){',
            '\t',
            '}',
        '}'].join('\n')
    },
    {
        label: 'classmethod',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Class method block',
        insertText:  [
            'method(){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'newinstance',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create new object (instance) of class',
        insertText:  `const obj = new ClassName();`
    },
    {
        label: 'objliteral',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create an object literal',
        insertText:  `const obj = { key: value, }`
    },
    {
        label: 'arrobjliteral',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create an array of object literals',
        insertText:  `const objArr = [{key: value},]`
    },
    {
        label: 'switchblock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Switch case block',
        insertText:  [
            'switch(a){',
            
            '\tcase 1:',
            '\tbreak;',
            '}'].join('\n')
    },
    

  ])};

  export const snippets = autoSuggestions().map(item => ({label:item.label,description: item.documentation}));