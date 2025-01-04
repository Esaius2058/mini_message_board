const express = require("express");
const path = require("node:path");
const bodyParser = require("body-parser");
const messageRoutes = require("./routers/routes/indexRouter");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", messageRoutes);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}.`);
});