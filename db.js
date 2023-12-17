import { createdb } from "pgtools";
import pg from "pg";
import config from "./configs.js";

try {
  await createdb(config.db, config.db.database);
} catch (e) {}

const client = new pg.Client(config.db);

// create Visitors table
client.query(
  `
  CREATE TABLE visitors (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`,
  (err, res) => {
    if (err) {
      console.log(err.message);

      return;
    }
    console.log(
      "Visitors table has been created into " + config.db.database + " database"
    );
  }
);

await client.connect().then(() => {
  console.log(
    "\x1b[33m" +
      "DB client successfully connected to " +
      config.db.database +
      " postgres db on " +
      config.db.host +
      ":" +
      config.db.port +
      "\x1b[0m"
  );
});

client.on("error", (e) => {
  console.log(e.message);
});

export default client;
