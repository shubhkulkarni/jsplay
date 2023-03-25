import ReactJson from 'react-json-view';
import $ from '../themes/constants';
import { isCyclic } from './cyclicRef';
import { classes } from './classes';
import { runInSandbox } from './sandbox';
import { useState } from 'react';


const iframe = document.getElementById('sandbox');

export const jsRunner = (code) => {
  // console.clear();
  try {
    return runInSandbox(iframe, code);
  } catch (err) {
    return String(err);
  }

};

export const renderMsg = (msg, theme) => {
  try {
    return msg.map((i) => {

      if (i === document) return <pre className={classes.document}> {JSON.stringify(i, null, 2)} </pre>

      if (i === window) {
        return <div className={classes.window} >
          Please use <b>browser console</b> for viewing <b>window</b> object
        </div>
      }


      if (isCyclic(i)) {
        return <div className={classes.cyclic} >
          Please use <b>browser console</b>. This object has cyclic references
        </div>
      }

      if(i instanceof WeakMap || i instanceof WeakSet){
        i = String(i) + "   This type is not yet supported ! Please use browser console :("
      }

      if (typeof i === 'object' && i instanceof Map) {
        return <div className="">
          <div className="map-name my-1">Map ({i.size})
            <span className="text-neutral-400 text-sm font-normal"> ( keys maintain insertion order )</span>
          </div>
          <div className={classes.object}>
            <ReactJson
              src={Object.fromEntries(i)}
              theme={theme === $.DARK ? 'summerfruit' : 'rjv-default'}
              iconStyle="circle"
              quotesOnKeys={false}
              collapsed={1}
              displayDataTypes={false}
              style={{ fontSize: '15px', fontWeight: theme === $.DARK ? 'normal' : 'bold' }}
              name={false}
            />
          </div>
        </div>
      }

      if (typeof i === 'object' && i instanceof Set) {
        return <div className="">
          <div className="map-name my-1">Set ({i.size})
            <span className="text-neutral-400 text-sm font-normal"> ( values are un-ordered )</span>
          </div>
          <div className={classes.object}>
            <ReactJson
              src={Array.from(i)}
              theme={theme === $.DARK ? 'summerfruit' : 'rjv-default'}
              iconStyle="circle"
              quotesOnKeys={false}
              collapsed={1}
              displayDataTypes={false}
              displayArrayKey={false}
              style={{ fontSize: '15px', fontWeight: theme === $.DARK ? 'normal' : 'bold' }}
              name={false}
            />
          </div>
        </div>
      }
    

      if (i === null) {
      return <div className={classes.null}>
        {String(i)}
      </div>
    }

    if (i === undefined) {
      return <div className={classes.undefined}>
        {String(i)}
      </div>
    }

    if (typeof i === 'function') {
      return <div className={classes.function}>
        {String(i)}
      </div>
    }

    if (typeof i === 'symbol') {
      return <div className={classes.symbol}>
        {String(i)}
      </div>
    }

    if (i instanceof Promise && typeof i.then === 'function') {
      return <div className={classes.promise}>
        <i className='font-semibold'>{String(i)}</i> - use browser console for in-depth info
      </div>
    }


    if (typeof i === 'object') {
      return (
        <div className={classes.object}>
          <ReactJson
            src={i}
            theme={theme === $.DARK ? 'summerfruit' : 'rjv-default'}
            iconStyle="circle"
            quotesOnKeys={false}
            collapsed={1}
            displayDataTypes={false}
            style={{ fontSize: '15px', fontWeight: theme === $.DARK ? 'normal' : 'bold' }}
            name={false}
          />
        </div>
      );
    }

    if (typeof i === 'number' || typeof i === 'bigint') {
      return <div className={classes.number}>
        {Number(i)}
      </div>
    }

    if (typeof i === 'boolean') {
      return <div className={classes.boolean}>
        {String(i)}
      </div>

    }
    return (
      <pre className={classes.default}>
        {i}
      </pre>
    );
  });


} catch (err) {
  return (
    <div className={classes.error}>
      {String(err)}
    </div>
  );
}
};



