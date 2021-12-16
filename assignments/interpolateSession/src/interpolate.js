/**
 * Function to interpolate a string with the values of the session.
 *
 * @param {String} value - The string to interpolate
 * @param {Object} [session={}] - Variables to interpolate
 * @param {Object} [options={}] - Delimiters
 * @return {String} interpolated string
 */
const interpolate = (value, session = {}, options = {}) => {
  // If one of delimiters does not exist return original value.
  if (!options.leftDelimiter || !options.rightDelimiter) return value;
  const { rightDelimiter, leftDelimiter } = options;
  let result = value;
  // Get all variables from the session object.
  const variables = Object.keys(session);
  // If there are no variables replace variables with empty strings.
  if (!variables.length) {
    const variableRegex = new RegExp(
      `${leftDelimiter}(.*?)${rightDelimiter}`,
      'g'
    );
    return result.replace(variableRegex, '');
  }
  // Replace all variables with value of the variable.
  variables.forEach((variable) => {
    const variableWithDelimiter = `${leftDelimiter}${variable}${rightDelimiter}`;
    const variableValue = session[variable] || '';
    result = result.replace(variableWithDelimiter, variableValue);
  });
  return result;
};

module.exports = { interpolate };
