import { CategoryRepository } from "../repositories/CategoryRepository";
import { CategoryService } from "../services/CreateCategoryService";
import { ListCategoriesService } from "../services/ListCategoriesService";
import { CreateCategoryController } from "./CreateCategoryController";
import { ListCategoriesController } from "./ListCategoriesController";

const categoriesRepository = new CategoryRepository();
const categoryService = new CategoryService(categoriesRepository);
const listCategoriesService = new ListCategoriesService(categoriesRepository);

export const categoryController = new CreateCategoryController(
  categoriesRepository,
  categoryService
);

export const listCategoriesController = new ListCategoriesController(
  listCategoriesService
);

console.log();
