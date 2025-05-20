import { PrismaClient } from "@prisma/client";
import { User } from "./generated/prisma/index";
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

  log(res)
}

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {}
