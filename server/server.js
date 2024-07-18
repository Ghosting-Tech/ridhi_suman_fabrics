const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const multer = require("multer");
const path = require("path"); // Import the path module

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

// CORS Configuration (Optional)
// Replace with your allowed origins if needed
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Replace with your desired upload directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  try {
    console.log(req.file);
    res
      .status(200)
      .json({
        message: "File uploaded successfully",
        filename: req.file.filename,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error uploading file" });
  }
});

app.get("/images/:filename", (req, res) => {
  const imagePath = path.join(__dirname, "uploads", req.params.filename);
  res.sendFile(imagePath);
});

// Health Check Route (Optional)
app.get("/", (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

// Error Handling Middleware (Optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
