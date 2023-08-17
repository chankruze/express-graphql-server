/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Aug 17 2023 13:06:05 GMT-0400 (Eastern Daylight Time)

Copyright (c) geekofia 2023 and beyond
*/

import { MutationResolvers } from '../../generated/graphql.js';

// Use the generated `MutationResolvers` type to type check our mutations!
const mutations: MutationResolvers = {
  // Below, we mock adding a new book. Our data set is static for this
  // example, so we won't actually modify our data.
  addBook: async (_, { title, author }, { dataSources }) => {
    return dataSources.booksAPI.addBook({ title, author });
  }
};

export default mutations;
