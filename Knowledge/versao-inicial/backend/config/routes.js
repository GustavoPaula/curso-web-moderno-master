module.exports = (app) => {

  app.post('/signup', app.api.user.save)
  app.post('/signin', app.api.auth.signin)
  app.post('/validateToken', app.api.auth.validateToken);
  
  app.route('/users')
    .post(app.api.user.save)
    .get(app.api.user.get);

  app.route('/users/:id')
    .put(app.api.user.save)
    .get(app.api.user.get);

  app.route('/categories')
    .get(app.api.category.get)
    .post(app.api.category.save);

  app.route('/categories/:id')
    .get(app.api.category.getById)
    .put(app.api.category.save)
    .delete(app.api.category.remove);
  
  app.rout('articles')
    .get(app.api.articles.get)
    .post(app.api.articles.save);
  
  app.route('article/:id')
    .get(app.api.articles.getById)
    .put(app.articles.save)
    .remove(app.api.articles.remove);

  app.route('/categories/:id/articles')
    .get(app.api.article.getByCategory);
};
