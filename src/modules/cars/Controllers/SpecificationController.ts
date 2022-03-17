import { Request, Response } from "express";
import { Specification } from "../model/Specification";
import { SpecificarionService } from "../services/SpecificationService";

export class SpecificationController {
  constructor(private specificationService: SpecificarionService) {}

  handle(request: Request, response: Response) {
    this.specificationService.execute(request.body);
    response.status(201).send();
  }

  findAll(): Specification[] {
    return this.specificationService.findAll();
  }
}
