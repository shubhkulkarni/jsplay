import React from 'react'
import $ from '../themes/constants'
import prettyLight from '../assets/pretty.svg'
import prettyDark from '../assets/pretty-dark.svg'
import dark from '../assets/dark.svg';
import light from '../assets/light.svg';

function Settings({saved,theme,darkLayoutSrc,lightLayoutSrc,btnTitle,toggleTheme,onLayoutChange,onPrettify}) {
  return (
    <div className="icon-btns flex items-center">
          {saved && <div className="text-xs mr-4 text-blue-700 dark:text-neutral-200">Changes saved !</div>}
          
          <button
            title={"Change layout"}
            className="m-0 rounded-full p-1 sm:block  hover:bg-neutral-300 dark:hover:bg-neutral-600 hidden"
            type="button"
            onClick={onLayoutChange}
          >
            <img src={theme === $.DARK ? darkLayoutSrc : lightLayoutSrc} className="dark-icon h-5" />
          </button>
          
          <button
            title={"Prettify your code"}
            className="m-0 sm:ml-2 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
            type="button"
            onClick={onPrettify}
          >
            <img src={theme === $.DARK ? prettyLight : prettyDark} className="dark-icon h-5" />
          </button>

          <button
            title={btnTitle}
            className="m-0 ml-2 rounded-full p-1  hover:bg-neutral-300 dark:hover:bg-neutral-600"
            type="button"
            onClick={toggleTheme}
          >
            <img src={theme === $.DARK ? light : dark} className="dark-icon h-5" />
          </button>

        </div>
  )
}

export default Settings