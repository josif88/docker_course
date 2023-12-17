import { env } from "custom-env";
//call and init dotenv file
env(process.argv[2]);

const config = {
  db: {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
  },
};

console.log(config);

export default config;
