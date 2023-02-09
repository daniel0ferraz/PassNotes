import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    border-radius: 8px;
    background: ${theme.colors.white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: 24px;
  `}
`;

export const Icon = styled.View`
  ${({ theme }) => css`
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: ${theme.colors.gray100};
    align-items: center;
    justify-content: center;
  `}
`;

export const InputText = styled(TextInput)`
  ${({ theme }) => css`
    width: 176px;
    height: 40px;
    border-radius: 8px;
    background: ${theme.colors.gray100};
    padding: 8px 11px;
    font-family: ${theme.fonts.Lexend400};
    color: ${theme.colors.blueGray800};
    font-size: 14px;
    line-height: 24px;
  `}
`;

export const IconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray100};
`;
