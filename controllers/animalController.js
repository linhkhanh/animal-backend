const animalRepository = require('../repositories/animalRepository');
const httpResponseFormatter = require('../formatters/httpResponse');

module.exports = {
    async getAll (req, res) {
        const animal = await animalRepository.findAll();
        httpResponseFormatter.formatOkResponse(res, animal);
    },
    async getById (req, res) {
        const oneAnimal = await animalRepository.findById(req.params.id);
        httpResponseFormatter.formatOkResponse(res, oneAnimal);
    },
    async create (req, res) {
        const task = await animalRepository.create(req.body);
        httpResponseFormatter.formatOkResponse(res, task);
    },
    async updateById  (req, res) {
        const isUpdateSuccessful = await animalRepository.updateById(req.params.id, req.body);
        httpResponseFormatter.formatOkResponse(res, {
            isUpdateSuccessful,
        });
    },
    async deleteById (req, res) {
        const isDeleteSuccessful = await animalRepository.deleteById(req.params.id);
        httpResponseFormatter.formatOkResponse(res, {
            isDeleteSuccessful,
        });
    }
};