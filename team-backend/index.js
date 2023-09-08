const express = require("express");
const connectMongo = require("./dbConfig");
const user = require("./Route/user");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://fsa-frontend.onrender.com"],
  })
);
const port = 8000 || process.env.PORT;

app.use(express.json());

connectMongo();

app.use("/users", user);

app.get("/", (req, res) => {
  res.send("Home page working");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
