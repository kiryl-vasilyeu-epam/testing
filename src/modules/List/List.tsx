import React, { useState } from 'react'
import styled from 'styled-components';
import { HorizontalContainer, Input, VerticalContainer } from '../../components';
import { useFruitsApi } from './hooks';

const List = () => {
  const [searchValue, setSearchValue] = useState('');
  const {
    fruits, loading
  } = useFruitsApi(searchValue);

  return (
    <HorizontalContainer>
      <VerticalContainer>
        <Input title='Search fruits' onChange={setSearchValue}/>
      </VerticalContainer>

      <ListContainer>
        {loading ?
          (<div>Loading...</div>)
        : fruits.map((fruitName) => (
          <ListItem key={fruitName}>
            {fruitName}
          </ListItem>
        ))}
      </ListContainer>
    </HorizontalContainer>
  )
}

const ListContainer = styled.div`
  flex: 1;
  margin: 10px;
  padding: 0 10px;
  border: 2px solid black;
  height: 200px;
  overflow: scroll;
`;
const ListItem = styled.div`
  padding: 0 10px;
  margin: 10px 0;
  border-left: 2px solid red;
`

export default List;