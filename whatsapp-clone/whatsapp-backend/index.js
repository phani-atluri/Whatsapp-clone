import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";
const app = express();

const port = process.env.PORT || 5500;

app.use(express.json());
app.use(cors());
var pusher = new Pusher({
  appId: "1082860",
  key: "4f0ec8b3b2793124de4c",
  secret: "308fc98f2e08eb2af84f",
  cluster: "us2",
  encrypted: true,
});

//DB connection
//key : DVydOKUuGs5NnfzL;
const connection_string =
  "mongodb+srv://Admin:DVydOKUuGs5NnfzL@cluster0.b5dkl.gcp.mongodb.net/WhatsappDB?retryWrites=true&w=majority";
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.once("open", () => {
  console.log("db connection on");
  const msgCollection = db.collection("messages");
  const changeStream = msgCollection.watch();
  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("error triggering Pusher");
    }
  });
});

app.get(`/messages/view/`, (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/messages/create", (req, res) => {
  var dbMessages = req.body;
  var dt = new Date();
  dbMessages.timestamp =
    String(dt.getHours()) + ":" + "" + String(dt.getMinutes());
  Messages.create(dbMessages, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => console.log(" running "));
