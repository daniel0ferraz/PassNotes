import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { PropsButton } from '.';

type Props = Pick<PropsButton, 'color' | 'size' | 'textColor'>;

const modifierButton = {
  Blue: () => css`
    background: ${({ theme }) => theme.colors.blue};
  `,
  Blue600: () => css`
    background: ${({ theme }) => theme.colors.blue600};
  `,

  Blue100: () => css`
    background: ${({ theme }) => theme.colors.blue100};
  `,

  // Size
  Small: () => css`
    width: 89px;
    height: 24px;
  `,
  Medium: () => css`
    width: 155px;
    height: 48px;
  `,

  //

  // Text Color
  White: () => css`
    color: ${({ theme }) => theme.colors.white};
  `,
  Bluetxt: () => css`
    color: ${({ theme }) => theme.colors.blue};
  `,
};

export const Button = styled(TouchableOpacity)<Props>`
  ${({ size, color }) => css`
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    ${!!size && modifierButton[size]()}
    ${!!color && modifierButton[color]}
  `}
`;

export const TextButton = styled.Text<Props>`
  ${({ theme, textColor }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.Lexend700};
    line-height: 24px;

    ${!!textColor && modifierButton[textColor]};
  `}
`;
