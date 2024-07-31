let obj = {
  a: 1,
  b: 2,
  c: {
    c: 1,
    d: 2,
  },
};

const deepClone = (obj, hash = new WeakMap()) => {
  if (obj instanceof Date) return new Data(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== "object" || obj === null) return obj;

  if (hash.has(obj)) {
    return hash.get(obj);
  }

  const newObj = obj.constructor();
  hash.set(obj, newObj);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key], hash);
    }
  }

  return newObj;
};
