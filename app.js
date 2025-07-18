const express = require("express");
const healthRoutes = require("./routes/health");
const authRoutes = require("./routes/auth");
const feedRoutes = require('./routes/feeds');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/", authRoutes);
app.use('/feeds', feedRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
