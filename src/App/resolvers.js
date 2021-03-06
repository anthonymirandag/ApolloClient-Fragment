import gql from 'graphql-tag'
const resolvers = {
  Book : {
    selected : (book) => book.selected || false, 
  },
  Mutation : {
    toggleBook : (_,args , { cache,getCacheKey } )=>{
      const id = getCacheKey( { id : args.id , __typename : 'Book'})
      console.log(args.id)
      console.log('IDs')
      console.log(id)
      const fragment = gql`
        fragment bookToSelect on Book{
          selected
        }
      
      ` 
      const book = cache.readFragment({fragment , id})
      console.log(book)
      const data = {
        ...book,
        selected :  !book.selected
      }
      cache.writeFragment({fragment , id , data})
      return null
    },
    unselectAllBooks : (_,args,{ cache , getCacheKey })=>{
      const query = gql`
        query {
          books {
            id
            selected
          } 
        }
      `
      const previous =  cache.readQuery({ query })
      const books = previous.books.map((book) =>({
        ...book,
        selected : !book.selected 
      }))

      cache.writeQuery({query, data : { books }})
      return null
    }
  }
}

export default resolvers