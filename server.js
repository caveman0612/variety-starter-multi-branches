const app = require("./app");

require("dotenv").config();
const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
