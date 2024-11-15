import {config} from "dotenv";
import pg from "pg";
const {Pool} = pg;

config({path: "../.env"});

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

const connectDb = async () => {
  try {
    await pool.connect();
    console.log("Connected to the PostgreSQL database!");
  } catch (err) {
    console.error("Database connection error: ", err);
    process.exit(1);
  };
};

export {pool, connectDb};
