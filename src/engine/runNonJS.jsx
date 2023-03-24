import { classes } from "./classes";

export const renderNonJS = (str)=>{
    const lines = str.split("\n");
    return <>
    {
        lines.slice(0,lines.length-1).map(item=>{
            return <div className="console-output py-1 font-semibold text-green-600 dark:font-normal dark:text-lime-400">
            <pre className={classes.default}>
                {item}
            </pre></div>
        })
    }</>
    
}