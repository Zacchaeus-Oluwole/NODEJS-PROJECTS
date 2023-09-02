const express = require("express");
const studentRoutes = require("./src/student/routes")
const app = express();
const port = 3000;
const pool = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
    pool.query("SELECT * FROM students", (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
})

app.use("/api/students", studentRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
