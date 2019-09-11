import React , {Fragment} from 'react';
import { Query } from 'react-apollo'
import  gql  from 'graphql-tag'
import Book from '../Book'
import UnselectAllBooksButton  from '../UnselectAllBooksButton'
const BOOKS_QUERY = gql `
  query{
  books{
    id
    title
    author
    selected @client
  }
}
`

const BookList = () => (
  <Query query = {BOOKS_QUERY}>
    {({loading,error,data})=>{
       if(loading) return <p>loading .... </p>
       if(error) return <p>Error: {error.message} </p>
        console.log(data)
       return (
          <Fragment>

            {data.books.map((book,index)=>(
                <Book 
                  key = {index}
                  {...book}
                />
            ))}
            <UnselectAllBooksButton/>  
          </Fragment>
       )

    }}
  </Query>
)
export default BookList