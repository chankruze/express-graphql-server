/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Aug 17 2023 13:07:42 GMT-0400 (Eastern Daylight Time)

Copyright (c) geekofia 2023 and beyond
*/

// Use our automatically generated Book and AddBookMutationResponse types
// for type safety in our data source class
import { AddBookMutationResponse, Book } from '../generated/graphql.js';

const BooksDB: Omit<Required<Book>, '__typename'>[] = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster'
  }
];

export class BooksDataSource {
  getBooks(): Book[] {
    // simulate fetching a list of books
    return BooksDB;
  }

  // We are using a static data set for this small example, but normally
  // this Mutation would *mutate* our underlying data using a database
  // or a REST API.
  async addBook(book: Book): Promise<AddBookMutationResponse> {
    if (book.title && book.author) {
      BooksDB.push({ title: book.title, author: book.author });

      return {
        code: '200',
        success: true,
        message: 'New book added!',
        book
      };
    } else {
      return {
        code: '400',
        success: false,
        message: 'Invalid input',
        book: null
      };
    }
  }
}
