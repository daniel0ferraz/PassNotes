import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 422px;
    background-color: ${theme.colors.blue700};} ;
  `}
`;
export const ContainerContent = styled.View`
  flex-direction: row;
  margin: 10px 0px 0px 10px;
`;

export const ContainerInfo = styled.View`
  /* padding: 30px 0px 20px 18px; */
`;

export const ContainerLogo = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 194px;
  height: 317px;
  left: 98px;
  top: 52px;
`;

export const ButtonGoback = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export const ContainerForm = styled.View`
  padding: 48px 20px;
  margin-top: 353px;
`;

export const SingInContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const SingInLegend = styled.Text`
  ${({ theme }) => css`
    width: 241px;
    font-size: 12px;
    line-height: 22px;
    font-family: ${theme.fonts.Lexend400};
    color: ${theme.colors.blueGray};
  `}
`;

export const ContentInput = styled.View`
  padding-bottom: 40px;
`;

export const LinkRegister = styled.View`
  flex-direction: row;
  margin-top: 25px;
  /* justify-content: space-between; */
  /* align-items: center; */
`;
