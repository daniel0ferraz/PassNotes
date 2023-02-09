import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Header = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    height: ${Dimensions.get('window').height};
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
  background: ${({theme}) => theme.colors.blue500};
`;

export const Info = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.blue500};
    font-family: ${theme.fonts.Lexend400};
    font-size: 14px;
    height: 24px;
    margin-left: 8px;
  `}
`;

export const InfoName = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.blue600};
    font-family: ${theme.fonts.Lexend700};
    font-size: 14px;
    padding-left: 4px;
    height: 24px;
  `}
`;

export const SingOut = styled.TouchableOpacity``;

export const ContentInfo = styled.View`
  margin-top: 24px;
`;

export const ContentForm = styled.View`
  margin-top: 60px;
`;

export const InputFieldContainer = styled.View`
  margin-bottom: 24px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 24px;
  justify-content: space-between;
  align-items: center;
`;

export const Alert = styled.View`
  flex: 1;
  position: absolute;
`;
