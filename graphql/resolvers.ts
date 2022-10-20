export const resolvers = {
  Query: {
    links: async (_parent, _args, ctx) => ctx.prisma.link.findMany(),
  },
};
