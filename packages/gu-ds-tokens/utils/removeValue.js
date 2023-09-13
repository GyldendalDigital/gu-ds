module.exports = function removeValue(obj) {
  for (let key in obj) {
    if (!obj[key] || typeof obj[key] !== "object") {
      continue;
    }
    if ("value" in obj[key] && !obj[key].keepDetails) {
      obj[key] = obj[key].value;
      continue;
    }
    obj[key] = removeValue(obj[key]);
  }
  return obj;
};
