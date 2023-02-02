const express = require("express");
const globalErrHandler = require("./src/middlewares/globalErrHandler");

const testOneRouter = require("./src/routes/test1/testRoutes");
const userRouter = require("./src/routes/users/userRoutes");


require("dotenv").config();
require("./src/config/dbConnect");


const app = express();
const apiUrl = process.env.API_URL || '/api/v1';

//middlewares
app.use(express.json()); 

app.use(`${apiUrl}/test`, testOneRouter);

//users route
app.use(`${apiUrl}/users`, userRouter);

//Error handlers middleware
app.use(globalErrHandler);

//404 error
app.use("*", (req, res) => {
  console.log(req.originalUrl);
  res.status(404).json({
    message: `${req.originalUrl} - Route Not Found`,
  });
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and running on ${PORT}`));
