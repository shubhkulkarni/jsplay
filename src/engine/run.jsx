import ReactJson from "react-json-view";
import $ from "../themes/constants";
import { isCyclic } from "./cyclicRef";

export const runJS = code =>{
    try{
        return new Function(code)();
    }catch(err){
        return String(err)
    }
    
}


export const renderMsg = (msg,theme) => {
    try {
        return msg.map(i => {
            if (i === document) return <pre key={i} className="border-b border-neutral-300 dark:border-neutral-700 py-1.5 border-opacity-80">
                {JSON.stringify(i, null, 2)}</pre>
            if(i === window) return <div key={i} className="dark:bg-blue-800 dark:text-lime-400 bg-blue-100 text-blue-800 dark:bg-opacity-50 p-1 px-2 my-2 rounded">Please use <b>browser console</b> for viewing <b>window</b> object</div>
            if(isCyclic(i)) return <div key={i} className="dark:bg-blue-800 dark:text-lime-400 bg-blue-100 text-blue-800 dark:bg-opacity-50 p-1 px-2 my-2 rounded">Please use <b>browser console</b>. This object has cyclic references</div>
            
            if (typeof i === 'object') {
                return <div key={i} className="border-b border-neutral-300 dark:border-neutral-700 py-1.5 border-opacity-80">
                <ReactJson src={i} theme={theme === $.DARK ? 'summerfruit' : 'rjv-default'}
                    iconStyle='circle' 
                    quotesOnKeys={false} 
                    collapsed={1} 
                    displayDataTypes={false} 
                    style={{fontSize:'15px',fontWeight:'normal'}}
                    name={false} /></div>
            }
            if(typeof i === 'number') return <div key={i} className="border-b dark:text-orange-500 text-orange-700 border-neutral-300 dark:border-neutral-700 py-1.5 border-opacity-80">{Number(i)}</div>
            if(typeof i === 'boolean') return <div key={i} className="border-b dark:text-blue-500 text-blue-700 border-neutral-300 dark:border-neutral-700 py-1.5 border-opacity-80">{String(i)}</div>
            return <div key={i} className="border-b border-neutral-300 dark:border-neutral-700 py-1.5 border-opacity-80">{i}</div>
        })
    } catch (err) {
        return <div key={i} className="error text-white bg-red-800 bg-opacity-50 p-1 px-2 rounded">{String(err)}</div>
    }
}

