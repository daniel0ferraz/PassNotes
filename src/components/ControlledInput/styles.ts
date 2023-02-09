import styled from 'styled-components/native';

export const Error = styled.Text`
  position: relative;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.errorRed};
  top: -31px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.errorRed};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.Lexend400};
  top: -19px;
`;
