import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import gigRoute from "./routes/gig.route.js";
import userRoute from "./routes/user.route.js";
import reviewRoute from "./routes/review.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to database!"))
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: "https://fiverr-clone-client.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.options("*", cors());

app.use("/auth", authRoute);
app.use("/gigs", gigRoute);
app.use("/users", userRoute);
app.use("/reviews", reviewRoute);
app.use("/orders", orderRoute);
app.use("/conversations", conversationRoute);
app.use("/messages", messageRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong!";

  return res.status(errStatus).send(errMessage);
});

app.listen(5050, () => {
  console.log("Listening to port 5050!");
});
