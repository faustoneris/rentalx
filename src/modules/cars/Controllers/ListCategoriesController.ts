import { Request, Response } from "express";
import { ListCategoriesService } from "../services/ListCategoriesService";

export class ListCategoriesController {
  constructor(private listCategoryService: ListCategoriesService) {}

  handle(request: Request, response: Response) {
    response.status(200).json(this.listCategoryService.execute());
  }
}
