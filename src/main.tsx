import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import App from "./App";
import "./index.css";

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      // authorization: token ? `${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
