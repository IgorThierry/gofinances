import React from 'react';

import { ScrollHorizontalText } from '../ScrollHorizontalText';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

interface CardProps {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

export function HighlightCard({
  type,
  title,
  amount,
  lastTransaction,
}: CardProps) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} color="#000" type={type} />
      </Header>

      <Footer>
        {/* <TextTicker
          style={{ marginTop: 38 }}
          duration={5000}
          loop
          bounce={false}
          repeatSpacer={50}
          marqueeDelay={1000}
        > */}
        <ScrollHorizontalText  style={{ marginTop: 38 }}>
          <Amount type={type}>{amount}</Amount>
        </ScrollHorizontalText>
        {/* </TextTicker> */}
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
