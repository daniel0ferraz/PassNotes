import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  /* margin-bottom: 8px; */
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;
  /* background-color: #ffffff; */

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.blue};
    `};
`;

export const Icon = styled.View`
  position: absolute;
  right: 30;
  top: 12;
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
