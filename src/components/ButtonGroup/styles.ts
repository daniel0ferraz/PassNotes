import styled, { css } from 'styled-components/native';

type Props = {
  clickedId: any;
  index: any;
};

export const ButtonGroup = styled.TouchableOpacity`
  ${({ clickedId, index }) => css`
    width: 136px;
    height: 36px;
    border-radius: 15px;
    /* background: #ffcc00; */

    border: 2px solid #ffcc00;
    align-items: center;
    justify-content: center;
    background: ${index === clickedId ? '#ffcc00' : '#fff'};
  `}
`;

export const ButtonGroupText = styled.Text<Props>`
  ${({}) => css`
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    text-align: center;
  `}
`;
