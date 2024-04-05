const express = require("express");
const app = express();
const userRouter = require("./routes/user");

const PORT = 3000;

app.use(mylogger);
// app.use(express.static("public"));

app.set("view engine", "ejs" );

app.get("/", (req, res) => {
  // console.log("hello!");
  // res.send("<h1>kon</h1>");
  // res.sendStatus(200);
  // res.status(500).send("エラーです。");
  res.render("index", { text: "Nodejs+Express" });
});

// ルーティング
app.use("/user", userRouter);

// ミドルウェア
function mylogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(PORT, () => {
  console.log("okoK");
});
