import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 109px;
    padding: 16px 24px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.gray300};
    position: relative;
    background-color: ${theme.colors.white};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend400};
    color: ${theme.colors.gray600};
    font-size: 14px;
    line-height: 24px;
  `}
`;

export const ContentArea = styled.View`
  align-items: flex-start;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-top: 10px;
`;

export const Number = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend400};
    color: ${theme.colors.blueGray};
    font-size: 40px;
    line-height: 43px;
    width: 131px;
    height: 36px;
  `}
`;

export const Icon = styled.View`
  top: 1px;
  width: 52px;
`;
