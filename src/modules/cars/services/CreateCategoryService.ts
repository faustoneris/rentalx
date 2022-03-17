import { CategoryRepository } from "../repositories/CategoryRepository";

interface RequestCategory {
  name: string;
  description: string;
  created_at: Date;
}

export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  execute(request: RequestCategory): void {
    const existsName = this.categoryRepository.findByName(request.name);

    if (existsName) {
      throw new Error("Já existe uma categoria com este nome.");
    }

    this.categoryRepository.create(request);
  }
}
