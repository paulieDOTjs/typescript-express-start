import express from "express";

// Boot express
const app = express();
const port = 5001;

// Application routing
app.use("/", (_, res, __) => {
  res.status(200).send('hello world');
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
