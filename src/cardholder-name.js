var isString = require('lodash/lang/isString');

function verification(isValid) {
  return {isValid: isValid};
}

function cardholderName(value) {
  if (!isString(value)) {
    return verification(false);
  } else if (value.trim().length > 0) {
    return verification(true);
  }

  return verification(false);
}

module.exports = cardholderName;
