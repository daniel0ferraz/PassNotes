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
    color: ${theme.colors.white};
  `}
`;

export const IconButton = styled.TouchableOpacity`
  margin-right: 10px;
  position: absolute;
  right: 40px;
  top: 14px;
`;

export const IconButton2 = styled.TouchableOpacity`
  margin-right: 10px;
  position: absolute;
  right: 8px;
  top: 14px;
`;
