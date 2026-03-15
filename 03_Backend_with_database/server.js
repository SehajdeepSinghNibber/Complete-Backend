import app from "./src/app.js";
import connectDB from "./src/db/db.js";

const PORT = 8000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is Running on PORT: ${PORT}`);
});

// import dns from "dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import app from "./src/app.js";
// import connectDB from "./src/db/db.js";

// const PORT = 8000;
// connectDB();
// app.listen(PORT, () => {
//   console.log(`Server is Running on PORT: ${PORT}`);
// });