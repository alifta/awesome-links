import { PrismaClient } from '.prisma/client';

import prisma from '../lib/prisma';

export type Context = {
  // TODO user from authenticator
  // user?: string;
  // accessToken?: string;

  prisma: PrismaClient;
};

export async function createContext(req, res): Promise<Context> {
  // TODO read user from authenticator
  // const session = getSession(req, res);
  // const { user, accessToken } = session;

  // if the user is not logged in, just return prisma and omit returning the user and accessToken
  // TODO uncomment the following after completing auth
  // if (!session) {
  //   console.log('No user found');
  //   return { prisma };
  // }

  // if user is logged in, getSession from Auth0 return user and access token and they will be included in
  return {
    // TODO uncomment the following after completing auth
    // user,
    // accessToken,
    prisma,
  };
}
