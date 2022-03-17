import { request, response, Router } from "express";
import { specificationController } from "../modules/cars/Controllers/index";

export const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return specificationController.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
  return response.json(specificationController.findAll());
});
