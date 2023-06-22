import cors from "cors";
import express from "express";
// import http from "http";

import routes from "../routes";
import connectDB from "../database/db";

// Get the port from the environment variables.
export const initServer = async () => {
  const PORT = process.env.PORT || 8080;

  const app = express();

  app.use(express.json());

  // Enable CORS.
  app.use(cors());

  // Disable the "X-Powered-By" header.
  app.disable("x-powered-by");

  // Set up the routes for the API.
  app.use("/api", routes);

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Ippo-Backend API" });
  });
  connectDB();
  // Listen on the specified port.
  app.listen(PORT, () =>
    console.info(
      `Express server is running on port: ${PORT} in ${
        process.env.NODE_ENV || "DEV"
      } environment`
    )
  );
};
