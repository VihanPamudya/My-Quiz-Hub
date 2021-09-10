const express = require("express");
const mongoose = require("mongoose");
const { MONGODB_URL } = require("./config/keys");
const PORT = process.env.PORT || 8070;

const app = express();
app.use(express.json());


mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
}) 

require("./models/Student")
app.use(require("./routes/students"))


if (process.env.NODE_ENV == "production") {
  app.use(express.static("react-quiz-app/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "react-quiz-app", "build", "index.html"));
  });
}

app.listen(PORT, () => {
    console.log(`server is up and running on port: ${PORT}`);
})
