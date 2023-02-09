import React from 'react';

import * as Styled from './styles';

type PropsBtnSocial = {
  onPress: () => void;
  children: React.ReactNode;
  icon: any;
};

export default function ButtonSocial({
  onPress,
  children,
  icon,
}: PropsBtnSocial) {
  return (
    <Styled.ContainerBtnSocial onPress={onPress}>
      <Styled.IconBtnSocial>{icon && icon}</Styled.IconBtnSocial>

      <Styled.TitleBtn>
        <Styled.TitleBtnText>{children}</Styled.TitleBtnText>
      </Styled.TitleBtn>
    </Styled.ContainerBtnSocial>
  );
}
