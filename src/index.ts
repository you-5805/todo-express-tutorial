import express from "express";
import * as bodyParser from "body-parser";

const path = require('path')

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get(
  "/api/v1/hello", (req: express.Request, res: express.Response) => {
    res.send("hello world");
  }
);

app.use(router);

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 5000");
});

export default app;