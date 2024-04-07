import { Request, Response } from "express";
import * as categoryService from "./category.service";

export const createCategory = async (request: Request, response: Response) => {
  const newCategory = await categoryService.createCategory(request.body);
  console.log(newCategory);
  return response.json(newCategory);
};
export const getCategory = async (request: Request, response: Response) => {
  const categories = await categoryService.getCategory();
  return response.json(categories);
};
export const getOneCategory = (request: Request, response: Response) => {};
export const updateCategory = async(request: Request, response: Response) => {
  const {id} = request.params
  const {parentCategoryId, ...subCategoryDTO} = request.body

  const updateCategory = await categoryService.updateCategory(Number(id),{...subCategoryDTO,parentCategory:{connect:{id:parentCategoryId}}})
  console.log(updateCategory)
  return response.json(updateCategory)
};
export const deleteCategory = (request: Request, response: Response) => {};
