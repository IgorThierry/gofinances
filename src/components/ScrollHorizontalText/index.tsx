import React from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import { ScrollViewProps } from 'react-native';

interface Props extends ScrollViewProps {}

export function ScrollHorizontalText({ children, ...rest }: Props) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      {...rest}
    >
      {children}
    </ScrollView>
  );
}
