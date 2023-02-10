import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Container, InputText, Icon} from './styles';

export type InputProps = TextInputProps & {
  icon: any;
  value?: string;
};

export function Input({icon, value, ...rest}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container>
      <Icon>{icon && icon}</Icon>

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={value}
        secureTextEntry={true}
        {...rest}
      />
    </Container>
  );
}
