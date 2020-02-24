const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

//load route files
const AwardRoutes = require("./routes/api/award");
const ConferenceRoutes = require("./routes/api/conference");
const TrainingRoutes = require("./routes/api/training");
const ContestRoutes = require("./routes/api/contest");

//Initiate middleware
app.use(express.json({ extended: false }));

//Congigure the routes
app.use("/api/v1/awards", AwardRoutes);
app.use("/api/v1/conferences", ConferenceRoutes);
app.use("/api/v1/trainings", TrainingRoutes);
app.use("/api/v1/contests", ContestRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The app is running on port no ${PORT}`);
});
