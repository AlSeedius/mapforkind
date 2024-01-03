const db = require('./db');
const helper = require('../app/helper/helper');

async function getMultiple(){
    const rows = await db.query(
        "SELECT regions.id, regions.path, regions.name, count(goodthings.regionid) as count FROM regions LEFT JOIN goodthings ON regions.id=goodthings.regionid GROUP BY regions.id ORDER BY regions.id"
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    getMultiple
}