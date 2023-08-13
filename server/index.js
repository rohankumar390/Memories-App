import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/post.js'

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server Running on Port: https://localhost:${PORT}`)
)

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL="mongodb+srv://javascript:javascriptt@cluster0.apiiupt.mongodb.net/javascript?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('DB Connected!'))
  .catch((error) => console.log(error.message));

app.use('/post', postRoutes)

export default app;