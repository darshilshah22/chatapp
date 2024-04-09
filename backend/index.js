const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000; // You can change the port number if needed

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, this is a simple Express server!");
});

// app.get("/api/chats", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chats/:id", (req, res) => {
//   const item = chats.find((item) => item._id === req.params.id);
//   if (!item) {
//     return res.status(404).send("Data not found");
//   }
//   res.json(item);
// });

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
