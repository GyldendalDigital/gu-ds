module.exports = function minifyDictionary(obj) {
  if (obj === null || obj === undefined) {
    return null;
  }

  if (typeof obj !== "object" || Array.isArray(obj)) {
    return obj;
  }

  var toRet = {};

  if (obj.hasOwnProperty("value")) {
    return obj.value;
  } else {
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        toRet[name] = minifyDictionary(obj[name]);
      }
    }
  }
  
  return toRet;
}