import express, { json } from "express";
import cors from "cors";

const app = express();

//Middlewares globales
app.use(json());
app.use(cors());

//Middlewares de rutas
// app.use("/api/v1/project", projecRoutes);
// app.use("api/v1/contact", contactRoutes);

//Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada "});
});

export default app;

