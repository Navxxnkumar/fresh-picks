const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const dbschema = require("./freshdb/db");
const PORT = 8880;
require('dotenv').config();

// database
mongoose.connect(process.env.mongolocaldb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Mongo Database connected successfully...!"))
    .catch((err) => { if (err) throw err; });

// frontend
const app = express();
app.use(express.json());
app.use(cors());

// backend 
app.get("/", async (req, res) => {
    // res.send("Server is Ready...!");
    // res.end();
    try {
        const data = await dbschema.find();
        res.json(data);
    }
    catch (err) {
        res.status(505).json({ Error: "Server Error...!" });
    }
});

app.post("/json", async (req, res) => {
    try {
        const { uname, uemail, umobile, umobiles, ufeed } = req.body;
        if (!uname || !uemail || !umobile || !umobiles || !ufeed) {
            return res.status(404).json({ Error: "Plz fill all the data..!" })
        }
        const datas = new dbschema({ uname, uemail, umobile, umobiles, ufeed });
        await datas.save();
        return res.status(202).json({ Message: "Data successfully stored in database..!" });
    }
    catch (err) {
        if (err) throw err;
        return res.status(505).json({ Error: "Check backend connectivity..!" })
    }
});

// deployment
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server successfully running on port ${PORT}...!`);
});