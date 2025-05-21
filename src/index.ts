import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

async function inserUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.User.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
  });

  log(res);
}

inserUser("swapnil@gmail.com", "2345", "swapnil", "panchade");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {}
