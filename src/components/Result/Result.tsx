import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRandomColor } from './helpers';

type IProps = { name: string; surname: string };

const Result: React.FC<IProps> = ({ name, surname }) => {
  const [nameColor, setNameColor] = useState('black');
  useEffect(() => {
    const color = getRandomColor()
    setNameColor(color)
  }, [name]);

  const [surnameColor, setSurnameColor] = useState('black');
  useEffect(() => {
    const color = getRandomColor()
    setSurnameColor(color)
  }, [surname]);

  return (
    <Container>
      <Field color={nameColor}>Name - {name}</Field>
      <Field color={surnameColor}>Surname - {surname}</Field>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  margin: 0 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const Field = styled.div`
  border: 3px solid ${({color}) => color};
  margin: 10px;
  padding: 10px;
  transition: border 1s;
`

export default Result;