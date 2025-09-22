import express from "express";
import cors from "cors";
import "dotenv/config";

import router from "./routes/checkoutRoutes.js";
//import webhookRoutes from "./routes/webhookRoutes.js";



const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
  }))


//app.use("/", webhookRoutes);

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/", router);


app.listen(process.env.APP_PORT || 3001, () => {
    console.log(`Server running on port ${process.env.APP_PORT}`);
});
