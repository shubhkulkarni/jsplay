import ReactJson from "react-json-view";
import { isCyclic } from "./cyclicRef";

export const runJS = code =>{
    try{
        return new Function(code)();
    }catch(err){
        return String(err)
    }
    
}


export const renderMsg = msg => {
    try {
        return msg.map(i => {
            
            if (i === document) return <pre className="border-b border-neutral-700 py-1.5 border-opacity-80">
                {JSON.stringify(i, null, 2)}</pre>
            if(i === window) return <div className="bg-blue-800 bg-opacity-50 p-1 px-2 my-2 rounded">Please use <b>browser console</b> for viewing <b>window</b> object</div>
            if(isCyclic(i)) return <div className="bg-blue-800 bg-opacity-50 p-1 px-2 my-2 rounded">Please use <b>browser console</b>. This object has cyclic references</div>
            
            if (typeof i === 'object') {
                return <div className="border-b border-neutral-700 py-1.5 border-opacity-80">
                <ReactJson src={i} theme='summerfruit'
                    iconStyle='circle' 
                    quotesOnKeys={false} 
                    collapsed={1} 
                    displayDataTypes={false} 
                    style={{fontSize:'14px'}}
                    name={false} /></div>
            }
            if(typeof i === 'number') return <div className="border-b text-orange-500 border-neutral-700 py-1.5 border-opacity-80">{Number(i)}</div>
            if(typeof i === 'boolean') return <div className="border-b text-blue-500 border-neutral-700 py-1.5 border-opacity-80">{String(i)}</div>
            return <div className="border-b border-neutral-700 py-1.5 border-opacity-80">{i}</div>
        })
    } catch (err) {
        return <div className="error text-white bg-red-800 bg-opacity-50 p-1 px-2 rounded">{String(err)}</div>
    }
}

