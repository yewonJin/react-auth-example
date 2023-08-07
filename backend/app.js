const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const login = require("./routes/auth/login");
const dashboard = require("./routes/dashboard");

const app = express();
const port = 4000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use("/auth/login", login);
app.use("/dashboard", dashboard);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
