import React from 'react';
import { Mutation } from 'react-apollo'
import gql  from 'graphql-tag'
const UNSELECT_ALL_BOOKS_MUTATION = gql `
    mutation {
      unselectAllBooks @client
    }

`

const UnselectAllBooksButton = ()=>(
  <Mutation mutation = {UNSELECT_ALL_BOOKS_MUTATION}>
  {(unselectAllBooks) =>{
    return (
        <button 
          onClick = { unselectAllBooks}
        >
          Unselect all Books
        </button>
        )}
  }    
  </Mutation>
)
export default UnselectAllBooksButton