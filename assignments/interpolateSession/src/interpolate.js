const removeDelimitersCreator = require("./consts/removeDelimeters");
const stringMatcherRegexCreator = require("./consts/stringMatcherRegexCreator");

const interpolate = (value, session = {}, options = {}) => {
    const { leftDelimiter, rightDelimiter } = options;
    const regexp = stringMatcherRegexCreator(leftDelimiter, rightDelimiter);
    const removeDelimiters = removeDelimitersCreator(
        leftDelimiter,
        rightDelimiter
    );
    return value.replace(regexp, (match) => {
        return session[removeDelimiters(match)] || "";
    });
};

module.exports = { interpolate };
