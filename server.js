const express = require("express");
const globalErrHandler = require("./src/middlewares/globalErrHandler");

const testOneRouter = require("./src/routes/test1/testRoutes");


require("dotenv").config();
// require("./app/config/dbConnect");

const app = express();

//middlewares
app.use(express.json()); 

app.use("/api/v1/test", testOneRouter);

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
