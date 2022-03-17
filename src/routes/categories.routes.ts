import { response, Router } from "express";
import multer from "multer";
import {
  categoryController,
  importController,
  listCategoriesController,
} from "./../modules/cars/Controllers/index";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return categoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importController.handle(request, response);
});

export { categoriesRoutes };
