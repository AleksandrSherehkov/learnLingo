import * as yup from 'yup';
import { emailValidator, nameValidator, phoneValidator } from './regexp';

const REQUIRED_FIELD = 'max-content';

export const booksSchema = yup.object().shape({
  name: yup
    .string()
    .required(REQUIRED_FIELD)
    .matches(nameValidator, 'the name must contain only letters')
    .min(2, 'the name must contain a minimum of 2 characters')
    .max(16, 'the name must contain a maximum of 16 characters'),

  email: yup
    .string()
    .matches(emailValidator, 'Please enter a valid email address')
    .required(REQUIRED_FIELD),

  phone: yup
    .string()
    .matches(phoneValidator, 'enter the number in this format +380123456789')
    .required(REQUIRED_FIELD),
});
