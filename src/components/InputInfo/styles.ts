import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxIcon = styled.View`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;
    background-color: ${theme.colors.white};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
  `}
`;

export const InputInfoName = styled(TextInput)`
  ${({ theme }) => css`
    width: 100%;
    font-family: ${theme.fonts.Lexend700};
    font-size: 20px;
    color: ${theme.colors.blue200};
  `}
`;

export const BoxIcon2 = styled.TouchableOpacity`
  position: absolute;
  right: 20;
  top: 12px;
`;
