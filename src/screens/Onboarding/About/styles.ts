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

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend900};
    font-size: 20px;
    line-height: 30px;
    width: 241px;
    height: 60px;
    margin-bottom: 16px;

    color: ${theme.colors.blueGray};
  `}
`;
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend400};
    font-size: 20px;
    line-height: 30px;

    width: 326px;
    height: 90px;

    color: ${theme.colors.blueGray};
    margin-bottom: 24px;
  `}
`;
export const SubtitleInfo = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend400};
    font-size: 14px;
    line-height: 24px;

    width: 310px;
    height: 72px;
    color: ${theme.colors.blueGray};
  `}
`;
