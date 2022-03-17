import { Category } from "../model/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class ListCategoriesService {
  constructor(private categoriesRepository: CategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}
