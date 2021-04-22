/**
 * Proxy wrapper for case insensitive object prop access. Makes all keys uppercase by default.
 * @param {object} obj object to wrap
 * @example
 *  const wrapped = caseInsensitive({ name: "John" });
 *
 *  console.log(wrapper) // { NAME: "John" }
 *  wrapper.Name // John
 *  wrapper.NAME // John
 *  wrapper.NamE // John
 *
 * @return obj
 */
const caseInsensitive = obj => {
  const handler = {
    get: function(target, key) {
      if (typeof key === "string") {
        const uKey = key.toUpperCase();

        if (key !== uKey && key in target) return target[key];
        return target[uKey];
      }
      return target[key];
    }
  };

  function checkAtomic(value) {
    if (typeof value === "object") return caseInsensitive(value);
    return value;
  }

  let newObj;

  if (typeof obj === "object" && obj) {
    newObj = new Proxy({}, handler);
    for (const key in obj) {
      if (typeof key === "string") {
        const objKey = key.toUpperCase();

        if (!(key in newObj)) newObj[objKey] = checkAtomic(obj[key]);
      }
    }
  } else if (Array.isArray(obj)) {
    newObj = [];
    for (let i = 0; i < obj.length; i++) newObj[i] = checkAtomic(obj[i]);
  }
  return newObj;
};

module.exports = caseInsensitive;


