const animalController = require('../controllers/animalController');

module.exports = app => {
    app.get('/animal', animalController.getAll);
    app.get('/animal/:id', animalController.getById);
    app.post('/animal', animalController.create);
    app.put('/animal/:id', animalController.updateById);
    app.delete('/animal/:id', animalController.deleteById);
};