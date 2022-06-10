import * as yup from 'yup';

export const ValidationForm = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  password_confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não conferem'),
});
