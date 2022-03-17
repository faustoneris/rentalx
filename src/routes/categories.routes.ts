import { response, Router } from "express";
import {
  categoryController,
  listCategoriesController,
} from "./../modules/cars/Controllers/index";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return categoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
