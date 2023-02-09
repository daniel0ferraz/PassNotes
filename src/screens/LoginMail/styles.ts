import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 422px;
    background-color: ${theme.colors.blue800};} ;
  `}
`;

export const ContainerContent = styled.View`
  flex-direction: row;
  margin: 10px 0px 0px 10px;
`;

export const ContainerInfo = styled.View`
  /* padding: 30px 0px 20px 18px; */
`;

export const ContainerLogo = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 194px;
  height: 317px;
  left: 98px;
  top: 52px;
`;

export const ButtonGoback = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export const ContainerForm = styled.View`
  padding: 22px 20px;
  margin-top: 353px;
`;

export const ContentInput = styled.View`
  margin-bottom: 30px;
`;

export const SingInContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SingInText = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.fonts.Lexend700};
    line-height: 30px;
    color: ${theme.colors.blueGray};
  `}
`;

export const LinkRegister = styled.View`
  margin-top: 28px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonLink = styled.TouchableOpacity``;

export const TextLink = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend700};
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.blue};
  `}
`;
