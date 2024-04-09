//connect DB
const mongoose = require("mongoose");

const connectDB = async () => {
    console.log(process.env.MONGO_URI)
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB");

      // Get host information from the connection object
      const host = mongoose.connection.host;
      console.log("MongoDB host:", host);
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
      process.exit();
    });
};

module.exports = connectDB;
