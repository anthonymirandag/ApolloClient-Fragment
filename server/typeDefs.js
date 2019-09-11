import { gql } from 'apollo-server-express'

const typeDefs  = gql `
  type Book {
    id : String!
    title : String
    author  : String
  }

  type Query{
    books : [Book]
  }
`
export default typeDefs