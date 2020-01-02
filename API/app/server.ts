import app from "./app";
import * as mongoose from "mongoose";
const PORT = process.env.PORT || 3000;

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
var urlmongo = "YOUR DB URL";
mongoose.connect(urlmongo, options);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));