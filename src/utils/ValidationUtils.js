import validate from 'validate.js';
import Message from './MessageUtils';

let constraints = {
  name: {
    presence: {
      message: Message.Errors.nameBlank,
    },
    length: {
      maximum: 30,
      tooLong: Message.Errors.nameLength,
    },
    format: {
      pattern: /^[a-zA-Z\s]*$/,
      message: Message.Errors.nameInvalid,
    },
  },
  email: {
    presence: {
      message: Message.Errors.emailBlank,
    },
    format: {
      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: Message.Errors.emailValidity,
    },
  },
  password: {
    presence: {
      message: Message.Errors.pwdBlank,
    },
    length: {
      minimum: 6,
      message: Message.Errors.pwdLengthMinimum,
    },
  },
  passwordBlank: {
    presence: {
      message: Message.Errors.pwdBlank,
    },
  },
  phoneNo: {
    presence: {
      message: Message.Errors.phoneBlank,
    },
    numericality: {
      notValid: Message.Errors.phoneInvalid,
    },

    length: {
      maximum: 10,
      minimum: 10,
      tooLong: Message.Errors.phoneTooLong,
      tooShort: Message.Errors.phoneTooShort,
    },
  },

  couponCode: {
    presence: {
      message: Message.Errors.couponCodeBlank,
    },
  },

  countryCode: {
    presence: {
      message: Message.Errors.countryCodeBlank,
    },
  },
};

export function validation(fieldName, value) {
  let formValues = {};
  formValues[fieldName] = value === '' ? null : value;

  let formFields = {};
  formFields[fieldName] = constraints[fieldName];

  let result = validate(formValues, formFields, {fullMessages: false});

  if (result) {
    return result[fieldName][0];
  }
  return null;
}

let PasswordConstraints = {
  confirmPassword: {
    equality: {
      attribute: 'password',
      message: Message.Errors.pwdMisMatch,
    },
  },
};

/**
 * @return {null}
 */
export function PasswordValidate(password, confirmPassword) {
  let result1 = validate(
    {
      password: password,
      confirmPassword: confirmPassword,
    },
    PasswordConstraints,
    {fullMessages: false},
  );

  if (result1 !== null && result1 !== undefined) {
    if (result1['confirmPassword'] !== undefined)
      return result1['confirmPassword'][0];
  }
  return null;
}
