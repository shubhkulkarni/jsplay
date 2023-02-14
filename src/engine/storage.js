if (!window)
  throw new Error("storage works only in browser that support local and Sesssion Storage.");

/**
 *
 * @param {Object} config
 *
 */
function Storage(config) {
  const newConfig = Object.assign({}, { type: localStorage, async: false }, config);

  if (!newConfig.type &&(newConfig.type === localStorage || newConfig.type === sessionStorage))
    throw new TypeError("config type should be localStorage or sessionStorage.");

  const { type, async } = newConfig;

  function _wrapPromise(value) {
    return async ? Promise.resolve(value) : value;
  }

  this.get = key => _wrapPromise(JSON.parse(type.getItem(key)));

  this.set = (key, value) => _wrapPromise(type.setItem(key, JSON.stringify(value)));

  this.delete = key => _wrapPromise(delete type[key]);
}

export default Storage;
