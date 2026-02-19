import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
const BASE_URL = "https://api.adviceslip.com/advice";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data;

    console.log(data);
    res.render('index.ejs', {advice : data})
  } catch (error) {
    console.error("Failed to fetch advice:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
