const db = require('./db');
const helper = require('../app/helper/helper');

async function getMultiple(id){
    const n = id;
    const rows = await db.query(
        "SELECT * FROM goodthings WHERE regionid=?", [n]
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    getMultiple
}