import { Dimensions, TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Card = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    border-radius: 8px;
    background: ${theme.colors.blue};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: 24px;
  `}
`;

export const Icon = styled.View`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: ${theme.colors.white};
    align-items: center;
    justify-content: center;
  `}
`;

export const InputText = styled(TextInput)`
  ${({ theme }) => css`
    width: ${Dimensions.get('window').width - 114}px;
    height: 40px;
    border-radius: 8px;
    background: ${theme.colors.white};
    padding: 8px 11px;
    font-family: ${theme.fonts.Lexend400};
    color: ${theme.colors.blueGray800};
    font-size: 14px;
    line-height: 24px;
  `}
`;

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  right: 40;
  top: 10;
`;

export const IconButton2 = styled.TouchableOpacity`
  position: absolute;
  right: 8;
  top: 10;
`;
