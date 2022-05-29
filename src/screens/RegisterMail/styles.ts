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
  justify-content: space-between;
  align-items: center;
`;

export const BoxText = styled.View`
  width: 140px;
  height: 162px;
`;

export const TitleBox = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.fonts.Lexend900};
    color: #ffffff;
    line-height: 30px;
    align-items: center;
  `}
`;

export const ContainerInfo = styled.View`
  padding: 30px 0px 20px 18px;
`;

export const ContainerLogo = styled.View`
  width: 195px;
  height: 233px;
  top: 160px;
`;

export const ButtonGoback = styled.TouchableOpacity`
  padding-bottom: 50px;
`;

export const ContainerForm = styled.View`
  padding: 40px 20px;
  margin-top: 150px;
`;

export const SingInContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 23px;
  padding-bottom: 41px;
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
  /* margin-top: 30px; */
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
