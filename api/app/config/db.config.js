const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "localhost",
        user: "root",
        password: "rootroot",
        database: "kindthings",
    },
    listPerPage: 1000,
};
module.exports = config;