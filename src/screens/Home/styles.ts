import {Dimensions} from 'react-native';
import {ms} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Header = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.blue800};
    width: 100%;
    height: 136px;
    padding: 40px 24px;
  `}
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxUser = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconUser = styled.View`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: ${({theme}) => theme.colors.gray050};
`;

export const ImageUser = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: ${({theme}) => theme.colors.gray050};
`;

export const Info = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.gray050};
    font-family: ${theme.fonts.Lexend400};
    font-size: 14px;
    height: 24px;
    margin-left: 8px;
  `}
`;

export const InfoName = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.gray050};
    font-family: ${theme.fonts.Lexend700};
    font-size: 14px;
    padding-left: 4px;
    height: 24px;
  `}
`;

export const BoxNoData = styled.View`
  margin-top: ${ms(30)}px;
  flex: 1;
  align-items: center;
`;

export const ContentInfo = styled.View`
  margin-top: 24px;
`;

export const Body = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.gray100};
  `}
`;

export const ContentCards = styled.View`
  padding: 40px 24px;
  margin-top: 60px;
  height: ${Dimensions.get('screen').height - 136 - 60 - 24}px;
`;
