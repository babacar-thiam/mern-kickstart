import path from "path";
import express from "express";

import devBundle from "./dev.bundle";
import Template from "../template";

const CURRENT_WORKING_DIR = process.cwd();

const app = express();
devBundle.compile(app);

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("/", (req, res) => {
    res.status(200).send(Template());
});

export default app;