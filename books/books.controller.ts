import { Request, Response } from "express";
import * as bookService from "./books.service";

export const createBooks = async (request: Request, response: Response) => {
  const books = await bookService.createBooks(request.body);
  console.log(books);
  return response.json(books);
};
export const getBookss = async (request: Request, response: Response) => {
  const books = await bookService.getBooks();
  return response.json(books);
};
export const getOneBooks = (request: Request, response: Response) => {};
export const updateBooks = async(request: Request, response: Response) => {
  const {id} = request.params
  const {categoryId,...bookDTO} = request.body

  const updateBook = await bookService.updateBooks(Number(id),{...bookDTO,categories:{connect:{id:categoryId}}})
  console.log(updateBook)
  return response.json(updateBook)
};
export const deleteBooks = (request: Request, response: Response) => {};
