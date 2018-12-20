const { forwardTo } = require('prisma-binding');

const Query = {
  things: forwardTo('db'),
};

module.exports = Query;
