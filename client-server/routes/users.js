var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});

/* GET users listing. */
router.get('/', function (req, res, next) {

  client.get('/users', function (err, request, response, obj) {

    assert.ifError(err);

    res.end(JSON.stringify(obj, null, 2));

    //console.log(JSON.stringify(obj, null, 2));

  });

});

router.get('/:id', function (req, res, next) {

  client.get(`/users/${req.params.id}`, function (err, request, response, obj) {

    assert.ifError(err);

    res.json(obj);

    //console.log(JSON.stringify(obj, null, 2));

  });

});

/**
 * rota para update.
 * O req.body serve para enviar os dados que estam sendo atualizados.
 */
router.put('/:id', function (req, res, next) {

  client.get(`/users/${req.params.id}`, req.body, function (err, request, response, obj) {

    assert.ifError(err);

    res.json(obj);

    //console.log(JSON.stringify(obj, null, 2));

  });

});
/**
 * Esta rota fara a exclusão de um item. 
 * O restify utiliza o del ao inves do delete.
 */
router.delete('/:id', function (req, res, next) {

  client.del(`/users/${req.params.id}`, function (err, request, response, obj) {

    assert.ifError(err);

    res.json(obj);

    //console.log(JSON.stringify(obj, null, 2));

  });

});
/**
 * Rota para salvar o primeiro registro no banco de dados.
 */

router.post('/', function (req, res, next) {

  client.post('/users/', req.body, function (err, request, response, obj) {

    assert.ifError(err);

    res.json(obj);

    //console.log(JSON.stringify(obj, null, 2));

  });

});

module.exports = router;
