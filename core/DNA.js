class DNA {

    async query(sql) {
        console.log('QUERY:', sql);
    }

    async insert(table, data) {
        console.log('INSERT:', table, data);
    }

    async update(table, id, data) {
        console.log('UPDATE:', table, id, data);
    }

    async delete(table, id) {
        console.log('DELETE:', table, id);
    }

    async find(table, filters = {}) {
        console.log('FIND:', table, filters);
    }

}

module.exports = new DNA();
