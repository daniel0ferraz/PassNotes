import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const Icon = styled.View`
  position: absolute;
  right: 30px;
  top: 12px;
`;

export const InputText = styled(TextInput)<Props>`
  ${({ theme, isFocused }) => css`
    flex: 1;
    height: 56px;
    color: #36444f;
    font-family: ${theme.fonts.Lexend400};
    font-size: 14px;
    line-height: 24px;
    padding: 0 23px;
    margin-bottom: 10px;
    border-bottom-width: 2px;
    border-bottom-color: ${isFocused
      ? theme.colors.blue
      : theme.colors.gray300};
  `}
`;
