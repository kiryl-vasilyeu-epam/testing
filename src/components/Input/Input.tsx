import { useState, useCallback } from 'react';
import styled from 'styled-components';

type IEvent = React.FormEvent<HTMLInputElement>
interface IProps {
  title: string;
  onChange?: (value: string) => void;
};

const Input: React.FC<IProps> = ({ title, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e: IEvent) => {
    const { value } = e.currentTarget
    setValue(value);
    onChange?.(value);
  }, [onChange]);

  return (
    <Container>
      {title}
      <InputComponent value={value} onChange={handleChange} />
    </Container>
  )
}

const Container = styled.label`
  display: flex;
  flex-direction: column;
`;

const InputComponent = styled.input`
  margin: 10px 0;
  width: 30%;
`;


export default Input;