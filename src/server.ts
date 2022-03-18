import express, { json, request } from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";
import "./database";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Esta Rodando" });
});

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(3333, () => console.log("Server is running!"));
