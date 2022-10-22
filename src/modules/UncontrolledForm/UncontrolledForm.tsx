import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components';
import { HorizontalContainer, Result, VerticalContainer } from '../../components';

type IEvent = React.FormEvent<HTMLFormElement>

const UncontrolledForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = useCallback((e: IEvent) => {
    e.preventDefault();
    setName(nameRef.current?.value ?? '');
    setSurname(surnameRef.current?.value ?? '');
  }, [])

  return (
    <HorizontalContainer>
      <VerticalContainer>
        <form onSubmit={handleSubmit}>

          <Field>
            Name:
            <input ref={nameRef} name="name" />
          </Field>

          <Field>
            Surname:
            <input ref={surnameRef} name="surname" />
          </Field>

          <input type="submit" value="Save" />
        </form>
      </VerticalContainer>

      <Result name={name} surname={surname} />
    </HorizontalContainer>
  )
}

const Field = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 30%;
`;

export default UncontrolledForm;