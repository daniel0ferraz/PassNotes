import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 422px;
    background-color: ${theme.colors.blue700};} ;
  `}
`;

export const ContainerContent = styled.View`
  flex-direction: row;
`;

export const BoxText = styled.View`
  width: 183px;
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
  width: 380px;
  height: 252px;
  top: 170;
  left: -148;
`;

export const ButtonGoback = styled.TouchableOpacity`
  padding-bottom: 20px;
`;

export const ContainerForm = styled.View`
  padding: 60px 20px;
  margin-top: 150px;
`;

export const SingInContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const SingInText = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.fonts.Lexend700};
    line-height: 30px;
    color: ${theme.colors.blueGray};
  `}
`;

export const SingInLegend = styled.Text`
  ${({ theme }) => css`
    width: 241px;
    font-size: 12px;
    line-height: 22px;
    font-family: ${theme.fonts.Lexend400};
    color: ${theme.colors.blueGray};
  `}
`;

export const ContentInput = styled.View`
  padding-bottom: 40px;
`;

export const LinkRegister = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
