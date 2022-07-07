import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 2;
    height: 422px;
    justify-content: center;
    background: ${theme.colors.blue600};
  `}
`;

export const Icon = styled.Text``;
