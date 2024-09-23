const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("../config/config");
const routes = require("./routes/index");
const logger = require("./utils/logger");

const app = express();
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info("Connected to MongoDB"))
  .catch((err) => logger.error("MongoDB connection error:", err));

const PORT = process.env.PORT || config.PORT;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
