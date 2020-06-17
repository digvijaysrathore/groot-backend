const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const routes = require("./controller");

mongoose.connect(process.env.DATA, {
	useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
	console.log("Woohoo!")
}).catch((err) => {
	console.log("Error Encountered!")
});

app.use(cors());
app.use(bodyParser.json());
app.use("/", routes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`PORT ${port}`)
});