'use strict';

function verification(isValid) {
  return {isValid: isValid};
}

function cardholderName(value) {
  if (typeof value !== 'string') {
    return verification(false);
  } else if (value.trim().length > 0) {
    return verification(true);
  }

  return verification(false);
}

module.exports = cardholderName;
