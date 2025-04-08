import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnect } from "./Models/db.js";
import { userRouter } from "./Routers/userRouter.js";
import { managerRouter } from "./Routers/managerRouter.js";
import { adminRouter } from "./Routers/adminRouter.js";

// Initializing App
const app = express();
// Initializing PORT
const PORT = process.env.PORT || 5000;
// Connecting DataBase
dbConnect();
// Config Dotenv
dotenv.config();
// Middlewares
app.use(express.json());
app.use(cors());

// App Routers
// user
app.use("/user", userRouter);

// manager
app.use("/manager", managerRouter);

// admin
app.use("/admin", adminRouter);

// Listening to App
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
