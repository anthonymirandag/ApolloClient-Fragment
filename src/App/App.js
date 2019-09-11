import React from 'react';
import  ApolloClient  from 'apollo-boost'
import { ApolloProvider} from 'react-apollo'
import BookList from '../BookList'
import resolvers from './resolvers'
const client = new ApolloClient({
  uri : 'http://localhost:4000/graphql',
  resolvers
})
function App() {
  return (
    <ApolloProvider client = {client}>
      <div className="App">
        <BookList/>      
      </div>
    </ApolloProvider>
  );
}

export default App;
