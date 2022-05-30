import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

export const Container = styled.View`
  ${({ theme }) => css`
    width: ${Dimensions.get('window').width * 0.8};
    height: 200px;
    border-radius: 8px;
    background-color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
  `}
`;

export const Icon = styled.View`
  padding-bottom: 12px;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend700};
    width: 221px;
    height: 48px;
    /* align-items: center; */
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 24px;
  `}
`;
