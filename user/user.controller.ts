import { Request, Response } from "express";
import * as userService from "./user.service";

export const createUser = async (request: Request, response: Response) => {
  const {address,...userDTO} = request.body
  // const newUser = await userService.createUser(request.body);
  const newUser = await userService.createUser({...userDTO,address:{create:address}});
  console.log(newUser);

  return response.json(newUser);
};
export const getUsers = async (request: Request, response: Response) => {
  const users = await userService.getUsers();
  return response.json(users);
};
export const getOneUser = (request: Request, response: Response) => {};
export const updateUser = (request: Request, response: Response) => {};
export const updateAuthor = async(request: Request, response: Response) => {
  const {id} = request.params
  const {editorId,...authorDTO} = request.body

  const updateAuthor = await userService.updateUser(Number(id),{...authorDTO,editor:{connect:{id:editorId}}})
  console.log(updateAuthor)
  return response.json(updateAuthor)
};
export const updatePublisher = async(request: Request, response: Response) => {
  const {id} = request.params
  const {authorId,...publisherDTO} = request.body

  const updatePublisher = await userService.updateUser(Number(id),{...publisherDTO,authors:{connect:{id:authorId}}})
  console.log(updatePublisher)
  return response.json(updatePublisher)
};
export const deleteUser = (request: Request, response: Response) => {};


export const createAddress = async (request: Request, response: Response) => {
  const address = await userService.createAddress(request.body)
  console.log(address);

  return response.json(address);
};
export const getAddresss = async (request: Request, response: Response) => {
  const address = await userService.getAddresss();
  return response.json(address);
};
