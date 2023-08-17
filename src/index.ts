/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Aug 17 2023 11:20:32 GMT-0400 (Eastern Daylight Time)

Copyright (c) geekofia 2023 and beyond
*/

import { readFileSync } from 'fs';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';

import { BooksDataSource } from './graphql/datasources.js';
import resolvers from './graphql/resolvers/index.js';

// import env variables
dotenv.config();

const PORT = Number(process.env.PORT) || 4000;

// Note: this uses a path relative to the project's
// root directory, which is the current working directory
// if the server is executed using `npm run`.
const typeDefs = readFileSync('./src/graphql/typedefs/index.graphql', {
  encoding: 'utf-8'
});

export interface MyContext {
  dataSources: {
    booksAPI: BooksDataSource;
  };
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      // We are using a static data set for this example, but normally
      // this would be where you'd add your data source connections
      // or your REST API classes.
      dataSources: {
        booksAPI: new BooksDataSource()
      }
    };
  },
  listen: {
    port: PORT
  }
});

console.log(`🚀 Server listening at: ${url}`);
