import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Header = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    height: ${Dimensions.get('window').height}px;
    padding: 40px 24px;
  `}
`;

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
