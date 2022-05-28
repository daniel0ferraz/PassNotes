import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Header = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue700};
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

export const IconUser = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray300};
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray050};
    font-family: ${theme.fonts.Lexend400};
    font-size: 14px;
    height: 24px;
    margin-left: 8px;
  `}
`;

export const InfoName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray050};
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
