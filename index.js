import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import db from "./db.js";
cors({ origin: true });
const corsOptions = {
  origin: ["*"],
  credentials: true,
  optionSuccessStatus: 200,
};

//init express js
export const app = express();

app.use(cors(corsOptions));
app.use(express.json());

//middleware to accept x-www-form
app.use(express.urlencoded({ extended: true }));

//end users routes
app.use("/", routes);

const port = parseInt(process.env.PORT) || 8787;

app.listen(port, () => {
  console.log(`Mohamed Abbas Al-Robaiey web app: listening on  ${port}`);
  console.log(
    `Visit http://127.0.0.1:${port}?username=mohamed in your browser`
  );
});

export default app;
