import { prisma } from "../config";

export const createBooks = (booksDTO: any) => {
  return prisma.book.create({ data: booksDTO, include: { author: true } });
};
export const getBooks = () => {
  return prisma.book.findMany({ include: { author: true,category:true } });
};
export const getOneBooks = (id: string) => {};
export const updateBooks = (id: number, booksDTO: any) => {
  return prisma.book.update({ data: booksDTO, where: { id } });
};
export const deleteBooks = (id: string) => {};
