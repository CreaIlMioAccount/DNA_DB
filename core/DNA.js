class DNA {

    async query(sql) {
        console.log('QUERY:', sql);
    }

    async insert(table, data) {
        console.log('INSERT:', table);
        console.log(data);
    }

    async update(table, id, data) {
        console.log('UPDATE:', table);
        console.log('ID:', id);
        console.log(data);
    }

    async delete(table, id) {
        console.log('DELETE:', table);
        console.log('ID:', id);
    }

    async find(table, filters = {}) {
        console.log('FIND:', table);
        console.log('FILTERS:', filters);
    }

}

module.exports = new DNA();