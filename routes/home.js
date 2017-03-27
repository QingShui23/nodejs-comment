
module.exports = {
  'home': (ctx, next) => {
    ctx.body = 'Hello World';
    next();
  }
};

