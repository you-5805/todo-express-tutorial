import express from "express";
import * as bodyParser from "body-parser";

const path = require('path')
let PORT = process.env.PORT
if (!PORT) {
  PORT = '5000'
}

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req: express.Request, res: express.Response) => {
    res.send("hello world");
  }
);

app.use(router);

app.listen(PORT, () => {
  console.log(`listening on port ${ PORT }`);
});

export default app;