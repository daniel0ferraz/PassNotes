/* import {IUser} from '../@types/User';
import {PropsCard} from '../@types/Card';

export const loginUser = async ({email, password}: IUser) => {
  try {
    // eslint-disable-next-line prettier/prettier
    const response = await api.post(
      `/users?email=${email}&password=${password}`,
    );
    return response.data;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const userLogged = async (id: number) => {
  try {
    const response = await api.get(`/users?id=${id}`);
    return response.data[0];
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getPasswordUser = async (id: number) => {
  try {
    const response = await api.get(`/passwords?password_id=${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const createPasswordUser = async ({
  id,
  nameSite,
  url,
  email,
  password,
  created_at,
  password_id,
}: PropsCard) => {
  try {
    await api.post(`/passwords`, {
      id: id,
      nameSite: nameSite,
      url: url,
      email: email,
      password: password,
      created_at: created_at,
      password_id: password_id,
    });

    return 'sucesso';
  } catch (error) {
    console.log(error);
    return 'error';
  }
};

export const deletePasswordUser = async (id: number) => {
  try {
    await api.delete(`/passwords/${id}`);
    return 'sucesso';
  } catch (error) {
    console.log('deletePasswordUser:', error);
    return 'error';
  }
};
 */
