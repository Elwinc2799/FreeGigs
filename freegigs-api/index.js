const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const reviewRouter = require("./routes/reviews");
const additionalDetailsRouter = require("./routes/additionalDetails");
const serviceRouter = require("./routes/services");
const conversationRouter = require("./routes/conversations");
const chatRouter = require("./routes/chats");
var cors = require("cors");
var path = require("path");

dotenv.config({ path: "./dot.env" });

mongoose
  .connect(
    `mongodb+srv://freegigs:freegigs@cluster0.kczcn.mongodb.net/freegigs?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB Connection is successful"))
  .catch(() => console.log("DB Connection is unsuccessful"));

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/additional", additionalDetailsRouter);
app.use("/reviews", reviewRouter);
app.use("/services", serviceRouter);
app.use("/conversations", conversationRouter);
app.use("/chats", chatRouter);

app.use(express.static(path.join(__dirname, "/freegigs-web-client/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/freegigs-web-client/build", "index.html")
  );
});

app.listen(8000, () => {
  console.log("Backend server is running!");
});
