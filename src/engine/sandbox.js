// Create an iframe

export function runInSandbox(iframe,code) {
    
    if (iframe) {
        const iframeWindow = iframe.contentWindow;
        iframeWindow.parent = undefined;
        return new Function('window','document', code)(iframeWindow,undefined);
    }

}


