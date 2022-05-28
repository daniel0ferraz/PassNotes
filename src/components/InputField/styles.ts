import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const InputField = styled(TextInput)`
  ${({ theme }) => css`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background-color: ${theme.colors.blue};

    padding: 10px 56px 9px 16px;
    font-size: 14px;
    font-family: ${theme.fonts.Lexend400};
    color: ${theme.colors.blue100};
  `}
`;
