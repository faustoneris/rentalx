import { request, response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificarionService } from "../modules/cars/services/CreateSpecificationService";

export const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  const data = request.body;

  const createSpecificarion = new CreateSpecificarionService(
    specificationRepository
  );

  createSpecificarion.execute(data);

  response.status(201).send();
});

specificationRoutes.get("/", (request, response) => {
  const findSpecification = specificationRepository.findAll();

  return response.json(findSpecification);
});
