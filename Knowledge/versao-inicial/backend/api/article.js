module.exports = app => {
    const { existsOrError } = app.api.validation;

    const save = ( req, res ) => {

        const article = { ...req.body };

        if(req.params.id) article.id = req.params.id;

        try {

            existsOrError(article.name, 'Nome não informado');

            existsOrError(article.description, 'Descrição não informado');

            existsOrError(article.categoryId, 'Categoria não informado');

            existsOrError(article.userId, 'Autor não informado');

            existsOrError(article.content, 'Caonteúdo não informado');

        } catch (msg) {

            res.status(400).send(msg);
        }

        if(article.id) {

            app.db('article')
                .update(article)
                .where({ id: article.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err));

        } else {

            app.db('article')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).send(err));

        }
    }

    const remove = async ( req, res ) => {

        try {

            const rowsDeleted = await app.db('articles')
                .where ({ id: article.id }).del();

            try{

                existsOrError(rowsDeleted, 'Artigo não encontrado');

                res.status(204).send();

            } catch (msg) {

                res.status(400).send(msg);

            }

        } catch (msg) {

            res.status(500).send(msg);

        }    
    }
    
    const limit = 10; // usado para paginação

    const get = ( req, res ) => {

        const page = req.query.page || 1;

        const result = await app.db('articles').count('id').first();
        
        const count = parseInt(result.count);

        app.db('article')
            .select('id', 'name', 'description')
            .limit(limit).offset(page * limit - limit)
            .then(articles => res.json({ data: articles, count, limit }))
            .catch(err => res.status(500).send(err));

    }

    const getById = ( req, res ) => {

        app.db('articles')
            .where({ id: article.id })
            .first()
            .then(article => {
                article.content = article.content.toString();
                return res.json(article)
            })
            .catch(err => res.status(500).send(err));
    }

    return { save, remove, get, getById };
}