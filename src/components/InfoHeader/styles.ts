import styled, {css} from 'styled-components/native';

type Props = {
  boxColor?: string | undefined;
  colorInfo?: boolean | undefined;
};

export const HeaderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxUser = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconUser = styled.View<Props>`
  ${({theme, boxColor}) => css`
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: ${boxColor ? theme.colors.blue : theme.colors.gray050};
  `}
`;

export const Info = styled.Text<Props>`
  ${({theme, colorInfo}) => css`
    color: ${colorInfo ? theme.colors.blue600 : theme.colors.gray050};
    font-family: ${theme.fonts.Lexend400};
    font-size: 14px;
    height: 24px;
    margin-left: 8px;
  `}
`;

export const InfoName = styled.Text<Props>`
  ${({theme, colorInfo}) => css`
    color: ${colorInfo ? theme.colors.blue600 : theme.colors.gray050};
    font-family: ${theme.fonts.Lexend700};
    font-size: 14px;
    padding-left: 4px;
    height: 24px;
  `}
`;

export const SingOut = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

export const ImageUser = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: ${({theme}) => theme.colors.gray050};
`;
