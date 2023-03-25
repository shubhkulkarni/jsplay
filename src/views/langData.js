import JAVA from "../assets/java.jsx";
import JS from "../assets/js.jsx";
import PY from "../assets/py.jsx";
import TS from "../assets/ts.jsx";
import { javaSnippets } from "../engine/suggestions/javaSuggestions";
import { snippets } from "../engine/suggestions/suggestions";

export const supportedLanguages = [

{name:"JavaScript",key:'js',icon: JS,tag:"Full features",use:"fullSupport"},
{name:"TypeScript",key:'ts',icon:TS,tag:"Full features",use:"fullSupport"},
{name:"Java",key:'java',icon:JAVA,tag:"Experimental",use:"experimental"},
{name:"Python",key:'py',icon:PY,tag:"Experimental",use:"experimental"},

]

export const snips = {
    js : snippets,
    ts : snippets,
    java: javaSnippets,
    py: []
}

export const starterCode = {
    js: '// Start writing your code ex. console.log("Hello World!");',
    ts: '// Start writing your code ex. console.log("Hello World!");',
    py: '# Start writing your code ex. print("Hello World!")',
    java: ["public class ClassA {\n",
    "\tpublic static void main(String[] args){",
    "\t\t\n",
    "\t}\n",
   
    "}"
    ].join("\n")
}

export const starterCodeVals = Object.values(starterCode)