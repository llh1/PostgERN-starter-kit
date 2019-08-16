const { Pool } = require("pg");
const config = require("../config");
const fs = require("fs");

const createSchema = fs
	.readFileSync(require.resolve("./recreate-schema.sql"))
	.toString();
const populateDb = fs
	.readFileSync(require.resolve("./populate-db.sql"))
	.toString();
const pool = new Pool(config);

queryDb(createSchema)
	.then(() => queryDb(populateDb))
	.then(() => process.exit(0));

function queryDb(query) {
	return new Promise((resolve, error) => {
		pool.query(query, function(err) {
			if (err) {
				console.log("error: ", err);
				error(err);
				process.exit(1);
			}
			resolve();
		});
	});
}
