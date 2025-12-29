require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dbschema = require("./freshdb/db");

const PORT = process.env.PORT || 8880;

// database
mongoose.connect(process.env.mongolocaldb)
    .then(() => console.log("Mongo Database connected successfully...!"))
    .catch(err => console.error("Mongo connection error:", err));

// app
const app = express();
app.use(express.json());
app.use(cors());

// routes
app.get("/", async (req, res) => {
    try {
        const data = await dbschema.find();
        res.json(data);
    } catch {
        res.status(500).json({ Error: "Server Error...!" });
    }
});

app.post("/json", async (req, res) => {
    try {
        const { uname, uemail, umobile, umobiles, ufeed } = req.body;
        if (!uname || !uemail || !umobile || !umobiles || !ufeed) {
            return res.status(400).json({ Error: "Please fill all data" });
        }
        const datas = new dbschema({ uname, uemail, umobile, umobiles, ufeed });
        await datas.save();
        res.status(201).json({ Message: "Data stored successfully" });
    } catch {
        res.status(500).json({ Error: "Backend error" });
    }
});

// listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
