import React from 'react';
import { categories } from '../../utils/categories';
import { ScrollHorizontalText } from '../ScrollHorizontalText';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  const category = categories.filter(item => item.key === data.category)[0];

  return (
    <Container>
      <Title>{data.name}</Title>
      <ScrollHorizontalText style={{ marginTop: 2 }}>
        <Amount type={data.type}>
          {data.type === 'negative' && '- '}
          {data.amount}
        </Amount>
      </ScrollHorizontalText>
      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
