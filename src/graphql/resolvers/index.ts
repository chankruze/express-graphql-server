/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Aug 17 2023 11:30:18 GMT-0400 (Eastern Daylight Time)

Copyright (c) geekofia 2023 and beyond
*/

import { Resolvers } from '../../generated/graphql.js';

import Mutation from './mutations.js';
import Query from './queries.js';

// Note this "Resolvers" type isn't strictly necessary because we are already
// separately type checking our queries and resolvers. However, the "Resolvers"
// generated types is useful syntax if you are defining your resolvers
// in a single file.
const resolvers: Resolvers = { Query, Mutation };

export default resolvers;
