const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const MONGOURL = "mongodb://localhost:27017";
mongoose.connect(MONGOURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to mongo db");
});

app.use(express.json());

app.use(cors());

const checklist = require("./routes/checklist");
app.use("/", checklist);

app.listen(8080, () => {
  console.log(`App is running on port 8080`);
});
