import * as yup from 'yup';

export const ValidationForm = yup.object({
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});
