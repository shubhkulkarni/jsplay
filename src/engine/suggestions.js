export const autoSuggestions = monaco => {
    
    return([
    {
        label: 'cl',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Log values to console output',
        insertText: `console.log()`
    },
    {
        label: 'cls',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Log string to console output',
        insertText: `console.log("")`
    },
    {
        label: 'forLoop',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'For loop',
        insertText: [
            'for(let i = 0; i < ; i++){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'forLoopRev',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'For loop for reverse iteration',
        insertText: [
            'for(let i = ; i >= 0; i--){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'forInLoop',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'For-in loop',
        insertText: [
            'for(let i in arr){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'forOfLoop',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'For-of loop',
        insertText: [
            'for(let i of arr){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'whileLoop',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'While loop',
        insertText: [
            'while(condition){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'doWhileLoop',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Do-while loop',
        insertText: [
            'do{',
            '\t',
            '}while(condition);'].join('\n')
    },
    {
        label: 'callbackSingle',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Generic callback',
        insertText: '(value) => ',
    },
    {
        label: 'callbackArr',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Array methods callback',
        insertText: '(value,index,array) => ',
    },
    {
        label: 'funcArrowSingle',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Arrow function single line',
        insertText: 'const func = a => ',
    },
    {
        label: 'funcArrow',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Arrow function',
        insertText: [
            'const func = (a,b) => {',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'funcDeclaration',
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
        label: 'asyncFuncArrowSingle',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Async arrow function single line',
        insertText: 'const func = async a => ',
    },
    {
        label: 'asyncFuncArrow',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Async arrow function',
        insertText: [
            'const func = async (a,b) => {',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'asyncFuncDeclaration',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Async function declaration',
        insertText: [
            'async function(a){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'ar',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create an empty array',
        insertText: `const arr = [];`
    },
    {
        label: 'ifBlock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'If condition block',
        insertText: [
            'if(condition){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'elseBlock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Else condition block',
        insertText: [
            'else{',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'ifElseBlock',
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
        label: 'elseIfBlock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Else-if condition block',
        insertText:  [
            'else if(condition){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'tryCatchBlock',
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
        label: 'finallyBlock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Finally block',
        insertText:  [
            'finally {',
            '\t',
            '}'
        ].join('\n')
    },
    {
        label: 'constructorBlock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Constructor',
        insertText:  [
            'constructor(){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'classWithConstructor',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Class with constructor',
        insertText:  [
            'class ABC {',
            '\tconstructor(){',
            '\t\t',
            '\t}',
        '}'].join('\n')
    },
    {
        label: 'classMethod',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Class method block',
        insertText:  [
            '(){',
            '\t',
            '}'].join('\n')
    },
    {
        label: 'newInstance',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create new object (instance) of class',
        insertText:  `const obj = new ClassName();`
    },
    {
        label: 'newSet',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create new Set',
        insertText:  `const set1 = new Set();`
    },
    {
        label: 'newMap',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create new Map',
        insertText:  `const map = new Map();`
    },
    {
        label: 'newDate',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create new Date object',
        insertText:  `const date = new Date();`
    },
    {
        label: 'objLiteral',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create an object literal',
        insertText:  `const obj = { key: value, }`
    },
    {
        label: 'arrObjLiteral',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Create an array of object literals',
        insertText:  `const objArr = [{key: value},]`
    },
    {
        label: 'switchBlock',
        kind: monaco?.languages?.CompletionItemKind?.Snippet,
        documentation: 'Switch case block',
        insertText:  [
            'switch(a){',
            
            '\tcase 1:',
            '\t\tbreak;',
            '}'].join('\n')
    },
    

  ])};

  export const snippets = autoSuggestions().map(item => ({label:item.label,description: item.documentation}));