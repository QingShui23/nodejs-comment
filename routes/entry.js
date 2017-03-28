

module.exports = (router, routes) => {
  // post
  router.post('/post', routes.post);
  // delete
  router.delete('/delete', routes.remove);
  // alter
  router.post('/alter', routes.alter);
  // list
  router.post('/lists', routes.lists);
}