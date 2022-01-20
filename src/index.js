import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';


const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": process.env.REACT_APP_API_KEY
}

const client = new ApolloClient({
  uri: 'https://ilei2-todo.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: headers
})

// client.query({
//   query: gql`
//     query getTodos {
//       todos {
//         done
//         id
//         text
//       }
//     }
//   `
// }).then(data => console.log(data))

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);