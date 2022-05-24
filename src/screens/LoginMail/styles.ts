import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 279px;
    background-color: ${theme.colors.blue800};} ;
  `}
`;

export const BoxText = styled.View`
  width: 131px;
  height: 80px;
  /* background: red; */
  margin-top: -20px;
`;

export const TitleBox = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: #ffffff;
  line-height: 30px;
`;

export const BoxLegend = styled.View`
  width: 93px;
  height: 61px;
`;

export const LegendText = styled.Text`
  font-size: 12px;
  line-height: 22px;
  color: #f8f9fa;
  font-weight: 400;
`;

export const ContainerInfo = styled.View`
  padding: 10px 0px 20px 18px;
`;

export const ButtonGoback = styled.TouchableOpacity`
  padding-bottom: 50px;
`;

export const ContainerContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerForm = styled.View`
  padding: 60px 20px;
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
