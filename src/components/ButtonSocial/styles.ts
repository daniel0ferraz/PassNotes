import styled, { css } from 'styled-components/native';

export const ContainerBtnSocial = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 49px;
    border: 1px solid ${theme.colors.gray300};
    border-radius: 8px;
    background: ${theme.colors.gray050};
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  `}
`;

export const IconBtnSocial = styled.View`
  ${({ theme }) => css`
    width: 49px;
    height: 49px;
    background: ${theme.colors.gray050};
    border: 1px solid ${theme.colors.gray300};
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  `}
`;

export const TitleBtn = styled.View`
  margin-left: 22px;
`;

export const TitleBtnText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Lexend500};
    font-size: 14px;
    color: ${theme.colors.blueGray800};
    line-height: 24px;
  `}
`;
