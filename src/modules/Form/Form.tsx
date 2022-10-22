import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import { VerticalContainer } from '../../components';

type IEvent = React.FormEvent<HTMLInputElement>

const Form = () => {
  const [value, setValue] = useState('');
  const handleChange = useCallback((e: IEvent) => {
    setValue(e.currentTarget.value);
  }, [setValue])

  return (
    <VerticalContainer>
      Form
      <Input value={value} onChange={handleChange} />
      Result
      <Result isEmpty={!value}>{value || 'empty'}</Result>
    </VerticalContainer> 
  )
}

const Input = styled.input`
  margin: 10px 0;
  width: 30%;
`;

const Result = styled.div<{isEmpty: boolean}>`
  opacity: ${({isEmpty}) => isEmpty ? 0.3 : 1}
`;

export default Form;