export function runInSandbox(iframe,code) {
    
    if (iframe) {
        const iframeWindow = iframe.contentWindow;
        iframeWindow.parent = undefined;
        // let newCode = `let _timer = Date.now();\n` + removeComments(code);
        const newCode = `let _timer = Date.now();\n` + replaceLoops(code)
        return new Function('window','document', newCode)(iframeWindow,undefined);
    }

}

const replaceLoops = code =>{
    // const prefix = `var _timer;\n
    // _timer = Date.now();\n`;
    const suffixFor = `\nif (Date.now() > (_timer + 800)) throw "A potential infinite 'for' loop detected ! Please refactor your code.";\n`
    const suffixWhile = `\nif (Date.now() > (_timer + 800)) throw "A potential infinite 'while' loop detected ! Please refactor your code.";\n`
    const suffixDoWhile = `\nif (Date.now() > (_timer + 800)) throw "A potential infinite 'do-while' loop detected ! Please refactor your code.";\n`
    let forSafe = code.replaceAll(/for\s*\([^)]*\)\s*\{*/gmi,match => match + suffixFor);
    let whileSafe = forSafe.replace(/while\s*\([^)]*\)\s*\{*/,match => match + suffixWhile);
    let doWhileSafe = whileSafe.replaceAll(/^\s*do\s*\{/gmi,match => match + suffixDoWhile);
    return doWhileSafe;
}

const removeComments = code => {
    const singleLineCommentRegex = /\/\/.*/g;
    const multiLineCommentRegex = /\/\*[\s\S]*?\*\//g;
    return code.replaceAll(singleLineCommentRegex,"\n").replaceAll(multiLineCommentRegex,"\n");
}


//   for loop regex  : /for\s*\([^)]*\)\s*\{*/gmi
//  while loop regex :   /while\s*\([^)]*\)\s*\{*/gmi
//do while : /^\s*do\s*\{/gmi

