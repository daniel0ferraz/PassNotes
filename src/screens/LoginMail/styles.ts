import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 422px;
    background-color: ${theme.colors.blue800};} ;
  `}
`;

export const ContainerContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxText = styled.View`
  width: 131px;
  height: 80px;
`;

export const TitleBox = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: #ffffff;
  line-height: 30px;
  align-items: center;
`;

export const BoxLegend = styled.View`
  width: 95px;
  height: 61px;
  margin-top: 16px;
`;

export const LegendText = styled.Text`
  font-size: 13px;
  line-height: 22px;
  color: #f8f9fa;
  font-weight: 400;
`;

export const ContainerInfo = styled.View`
  padding: 30px 0px 20px 18px;
`;

export const ContainerLogo = styled.View`
  width: 240px;
  height: 245px;
  top: 130;
  left: -25;
`;

export const ButtonGoback = styled.TouchableOpacity`
  padding-bottom: 50px;
`;

export const ContainerForm = styled.View`
  padding: 40px 20px;
  margin-top: 150px;
`;

export const ContentInput = styled.View`
  /* background: red; */
  margin-bottom: 50px;
`;

export const SingInContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 32px;
`;

export const SingInText = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    color: ${theme.colors.blueGray};
  `}
`;

export const LinkRegister = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonLink = styled.TouchableOpacity``;

export const TextLink = styled.Text`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.blue};
  `}
`;
