import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';
import {PropsPopUp} from '.';

type Props = Pick<PropsPopUp, 'sizeBox' | 'sizeBoxText'>;

const modifierSizebox = {
  Medium: () => css`
    height: 200px;
  `,
  Small: () => css`
    height: 176px;
  `,

  Large: () => css`
    height: 200px;
  `,
};

const modifierSizeboxText = {
  Medium: () => css`
    width: 200px;
  `,
  Small: () => css`
    width: 225px;
  `,
  Large: () => css`
    width: 305px;
  `,
};

export const Wrapper = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const Container = styled.View<Props>`
  ${({theme, sizeBox}) => css`
    width: ${Dimensions.get('window').width * 0.8}px;
    border-radius: 8px;
    background-color: ${theme.colors.white};
    align-items: center;
    justify-content: center;

    ${!!sizeBox && modifierSizebox[sizeBox]()}
  `}
`;

export const Icon = styled.View`
  padding-bottom: 12px;
`;

export const Message = styled.Text<Props>`
  ${({theme, sizeBoxText}) => css`
    font-family: ${theme.fonts.Lexend700};
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 24px;
    color: ${theme.colors.blueGray};

    ${!!sizeBoxText && modifierSizeboxText[sizeBoxText]()}
  `}
`;

export const RowBtn = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
