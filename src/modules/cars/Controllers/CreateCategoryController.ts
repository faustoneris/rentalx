import { Request, Response } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
  constructor(private categoryService: CategoryService) {}
  handle(request: Request, response: Response): Response {
    this.categoryService.execute(request.body);

    return response.status(201).send();
  }
}
