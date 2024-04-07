import { prisma } from "../config";

export const createUser = (userDTO: any) => {
  return prisma.user.create({ data: userDTO });
};
export const getUsers = () => {
  return prisma.user.findMany({ include: { address: true,editor:true,author:true, authors:true,publishers:true } });
};
export const getOneUser = (id: string) => {};
export const updateUser = (id: number, userDTO: any) => {
  return prisma.user.update({
    data: userDTO,
    where: { id },
    include: { editor: true, author: true, authors:true },
  });
};
export const deleteUser = (id: string) => {};

export const createAddress = (addressDTO: any) => {
  return prisma.address.create({ data: addressDTO });
};
export const getAddresss = () => {
  return prisma.address.findMany();
};
