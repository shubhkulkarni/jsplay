import MonacoEditor from "@monaco-editor/react"

const CodeView = (props) => {
    
    return <div className="h-full w-1/2 editor-main">
        <MonacoEditor {...props} defaultLanguage="javascript" />
    </div>
}

export default CodeView