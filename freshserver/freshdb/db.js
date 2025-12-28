const mongoose = require("mongoose");
const db = new mongoose.Schema({
    uname: {
        type: String,
        required: true
    },
    uemail: {
        type: String,
        required: true
    },
    umobile: {
        type: String,
        required: true
    },
    umobiles: {
        type: String, 
        required: true
    },
    ufeed: {
        type: String,
        required: true 
    }
}, {
    collection: "userinfo"
});
module.exports = mongoose.model("userinfo", db);