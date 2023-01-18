import MonacoEditor from "@monaco-editor/react"

const Editor = (props) => {
    return <div className="h-full">
        <MonacoEditor {...props}  defaultLanguage="javascript" theme="vs-dark"/>
    </div>
}

export default Editor