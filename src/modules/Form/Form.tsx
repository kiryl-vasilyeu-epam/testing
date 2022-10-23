import { useState } from 'react'
import { HorizontalContainer, Input, Result, VerticalContainer } from '../../components';

const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <HorizontalContainer>
      <VerticalContainer>
        <Input title='Name' onChange={setName}/>
        <Input title='Surname' onChange={setSurname} />
      </VerticalContainer>

      <Result name={name} surname={surname} />
    </HorizontalContainer>
  )
}



export default Form;