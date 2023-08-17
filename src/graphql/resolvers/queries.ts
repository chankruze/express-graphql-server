/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Aug 17 2023 13:06:29 GMT-0400 (Eastern Daylight Time)

Copyright (c) geekofia 2023 and beyond
*/

import { QueryResolvers } from '../../generated/graphql.js';

// Use the generated `QueryResolvers` type to type check our queries!
const queries: QueryResolvers = {
  // Our third argument (`contextValue`) has a type here, so we
  // can check the properties within our resolver's shared context value.
  books: async (_, __, { dataSources }) => {
    return dataSources.booksAPI.getBooks();
  }
};

export default queries;
