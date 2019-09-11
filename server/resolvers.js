import books from './books'

const resolvers = {
  Query :{
    books : (_,args,context)=>{
      return books
    }
  }
}
export default resolvers