import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    width: 100%;
    height: 183px;
    background: ${theme.colors.blue600};
    padding: 40px 32px;
  `}
`;

export const BoxItens = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitlePage = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.Lexend900};
    color: ${theme.colors.white}
    font-size: 20px;
    width: 180px;
    text-align: center;
    height: 60px;
    margin-top: 20px;
  `}
`;
