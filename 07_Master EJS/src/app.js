import express from "express";
import router from "./routes/route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/", router);

export default app;