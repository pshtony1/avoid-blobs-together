import express from "express";
import { join } from "path";
import Socket from "socket.io";
import logger from "morgan";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));
app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`✔ Server running on http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);
const io = Socket(server);

io.on("connection", (socket) => {
  console.log("connected");
});
