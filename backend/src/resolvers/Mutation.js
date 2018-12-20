const Mutations = {
  async createThing(parent, args, ctx, info) {
    const thing = await ctx.db.mutation.createThing({
      data: {
        ...args
      }
    }, info);

    return thing;
  }
};

module.exports = Mutations;
