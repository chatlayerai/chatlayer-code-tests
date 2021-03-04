const removeDelimitersCreator = (leftDelimiter, rightDelimiter) => (value) => {
  return value.replace(leftDelimiter, "").replace(rightDelimiter, "");
};

module.exports  = removeDelimitersCreator;
