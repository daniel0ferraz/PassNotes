import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 422px;
    justify-content: center;
    background: ${theme.colors.blue600};
  `}
`;

export const Icon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
