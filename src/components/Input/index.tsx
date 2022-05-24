import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, IconContainer, InputText } from './styles';
import IconMail from '../../assets/icon-email.svg';

export type InputProps = TextInputProps & {
  icon: any;
  value?: string;
};

export function Input({ icon, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      {/* {icon && icon} */}
      <IconContainer isFocused={isFocused} />

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={value}
        {...rest}
      />
    </Container>
  );
}
