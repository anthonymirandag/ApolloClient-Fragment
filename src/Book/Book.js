import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'
import './Book.css'
const SELECT_BOOK_MUTATION = gql`
  mutation{
    toggleBook(id : $id) @client
  }
`


const Book = ({ id ,author , title , selected})=>(
  <Mutation mutation = {SELECT_BOOK_MUTATION}>
    {
      (toggleBook)=>(
        <p onClick = {()=> toggleBook({variables : {id} })}
          className = {selected ? 'selected' : 'not-selected'}
        >
        {title} by {author}
      </p>
      )
    }
  </Mutation>
)
export default  Book
