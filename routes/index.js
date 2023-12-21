import express from "express";
import client from "../db.js";

import * as userController from "../controllers/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { username } = req.query;

    if (username) {
      const insertQuery = `
      INSERT INTO visitors (username, date)
      VALUES ($1, $2)
    `;

      client.query(insertQuery, [username, new Date()], (error, results) => {
        if (error) {
          console.error("Error inserting data:", error);
        } else {
          console.log("Data inserted successfully:", results.rows);
        }
      });
    }

    const selectQuery = `
  SELECT *
  FROM visitors
  ORDER BY id DESC
  LIMIT 10
`;

    const result = await client.query(selectQuery);
    console.log(result.rows);
    return res.json({
      app: "Mohamed Abbas Al-Robaiey web app",
      latestVisitors: result.rows,
    });
  } catch (e) {
    res.send(e.message);
  }
});

router.use("/image", express.static("public"));

//user routes
router.get("/users/:id", userController.getById);
router.post("/users", userController.create);

export default router;
