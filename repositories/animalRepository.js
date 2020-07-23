const db = require('../db');
const { ObjectId } = require('mongodb');

const doFindMany = condition => db.animals.find(condition).toArray();

module.exports = {
    async create (data) {
        if (!('isCompleted' in data)) data.isCompleted = false;
        const { ops: [newOne] } = await db.animals.insertOne(data);
        return newOne;
    },
    async updateById (id, newData) {
        const { result } = await db.animals.updateOne(
            { _id: ObjectId(id) },
            { $set: newData }
        );
        return !!result.nModified;
    },
    async findById (id) {
        const [result] = await doFindMany({ _id: ObjectId(id) });
        return result;
    },
    findAll () {
        return doFindMany({});
    },
    async deleteById (id) {
        const { result } = await db.animals.deleteOne({
            _id: ObjectId(id),
        });
        return !!result.n;
    }
};