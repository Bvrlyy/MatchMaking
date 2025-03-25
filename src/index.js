import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";

dotenv.config();
const app = express();

// Connexion à la DB
connectDB();

// Middleware JSON
app.use(express.json());

// Routes de l'API
app.get("/", (req, res) => {
  res.send("coucou ça marche la");
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
