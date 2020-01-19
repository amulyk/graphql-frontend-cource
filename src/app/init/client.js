// Core
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// GraphQL Server
const uri = 'https://funded-pet-library.moonhighway.com/';
const link = createHttpLink({
  uri
});

// Cache initialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  link
});
