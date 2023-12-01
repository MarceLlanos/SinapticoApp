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
import { Provider } from "react-redux";
import { storeReduxApp } from "./redux";

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <Provider store={storeReduxApp}>
      <App />
    </Provider>
  </ApolloProvider>
);
