import styled, { css } from 'styled-components/native';

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    background: ${theme.colors.white};
  `}
`;

export const Container = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    padding: 38px 32px 121px 32px;
    background: ${theme.colors.white};
  `}
`;

export const ContainerInfo = styled.View`
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend900};
    font-size: 20px;
    line-height: 30px;
    width: 241px;
    height: 60px;

    color: ${theme.colors.blueGray};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 326px;
    height: 48px;
    color: ${theme.colors.blueGray};
  `}
`;

export const ContainerButtons = styled.View`
  flex-direction: column;
`;
