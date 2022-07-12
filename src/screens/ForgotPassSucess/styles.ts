import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;

    height: 812px;
    padding: 105px 32px 290px 32px;
    background-color: ${theme.colors.blue600};
  `}
`;

export const BoxLogo = styled.View`
  justify-content: center;
  align-items: center;
  width: 194px;
  height: 205px;
`;

export const BoxText = styled.View`
  width: 311px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const TextInfo = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend900};
    font-size: 20px;
    line-height: 30px;
    color: ${theme.colors.white};
    text-align: center;
  `}
`;

export const BoxMessage = styled.View`
  margin-top: 48px;
  margin-bottom: 152px;
  width: 292px;
  height: 72px;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend500};
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.white};
    text-align: center;
  `}
`;

export const ContainerButton = styled.View`
  width: 100%;
`;
