import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 422px;
    background-color: ${theme.colors.blue800};} ;
  `}
`;

export const BoxText = styled.View`
  width: 145px;
  height: 154px;
`;

export const TitleBox = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend900};
    font-size: 20px;
    color: #ffffff;
    line-height: 30px;
    align-items: center;
  `}
`;

export const BoxLegend = styled.View`
  width: 85px;
  height: 47px;
  margin-top: 16px;
`;

export const LegendText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend400};
    font-size: 13px;
    line-height: 22px;
    color: #f8f9fa;
  `}
`;

export const BoxButton = styled.View`
  width: 18px;
  height: 18px;
  padding: 80px 0 60px 0;
`;

export const ContainerInfo = styled.View`
  padding: 30px 0px 20px 18px;
`;

export const ContainerLogo = styled.View`
  width: 240px;
  height: 245px;
  top: 70px;
  left: 10px;
`;

export const ButtonGoback = styled.TouchableOpacity``;

export const ContainerContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerForm = styled.View`
  ${({ theme }) => css`
    padding: 60px 20px;
    background: ${theme.colors.white};
  `}
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
    /* font-weight: 700; */
    line-height: 30px;
    color: ${theme.colors.blueGray};
    font-family: ${theme.fonts.Lexend700};
  `}
`;

export const SingInLegend = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    line-height: 22px;
    color: ${theme.colors.blueGray};
    font-family: ${theme.fonts.Lexend400};
  `}
`;
