import styled, { css } from 'styled-components/native';
import { PropsBtnIcon } from './index';

type Props = Pick<PropsBtnIcon, 'color' | 'format'>;

const modifierButton = {
  Blue: () => css`
    background: ${({ theme }) => theme.colors.blue};
  `,
  Blue600: () => css`
    background: ${({ theme }) => theme.colors.blue600};
  `,

  // Radius
  square: () => css`
    border-radius: 8px;
  `,
  round: () => css`
    border-radius: 50px;
  `,
};

export const BtnIcon = styled.TouchableOpacity<Props>`
  ${({ color, format }) => css`
    width: 48px;
    height: 48px;
    align-items: center
    justify-content: center;

    ${!!color && modifierButton[color]}
    ${!!format && modifierButton[format]}
  `}
`;
