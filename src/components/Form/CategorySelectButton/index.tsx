import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Category, Icon } from './styles';

interface Props extends RectButtonProperties {
  title: string;
}

export function CategorySelectButton({
  title,
  onPress,
  activeOpacity,
  ...rest
}: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
