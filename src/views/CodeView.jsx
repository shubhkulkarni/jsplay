import MonacoEditor from "@monaco-editor/react"

const CodeView = (props) => {
    return <div className="h-full w-1/2 editor-main">
        <MonacoEditor {...props} defaultLanguage="javascript" theme="codePro-dark1"/>
    </div>
}

export default CodeView