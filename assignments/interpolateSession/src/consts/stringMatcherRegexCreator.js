const stringMatcherRegexCreator = (leftDelimiter, rightDelimiter) =>
  new RegExp(`(${leftDelimiter}).*?(${rightDelimiter})`, "g");

module.exports = stringMatcherRegexCreator;
