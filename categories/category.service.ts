import { prisma } from "../config";

export const createCategory = (categoryDTO: any) => {
  return prisma.category.create({ data: categoryDTO, include: { book: true } });
};
export const getCategory = () => {
  return prisma.category.findMany({ include: { book: true,subCategory:true, parentCategory:true } });
};
export const getOneCategory = (id: string) => {};
export const updateCategory = (id:number,categoryDTO: any) => {
  return prisma.category.update({data:categoryDTO,where:{id},include:{subCategory:true,parentCategory:true}})
};
export const deleteCategory = (id: string) => {};
