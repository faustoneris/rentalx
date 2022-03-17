import { CategoryRepository } from "../repositories/CategoryRepository";
import { SpecificationRepository } from "../repositories/SpecificationsRepository";
import { CategoryService } from "../services/CreateCategoryService";
import { SpecificarionService } from "../services/SpecificationService";
import { ListCategoriesService } from "../services/ListCategoriesService";
import { CreateCategoryController } from "./CreateCategoryController";
import { SpecificationController } from "./SpecificationController";
import { ListCategoriesController } from "./ListCategoriesController";

//repositories
const categoriesRepository = new CategoryRepository();
const specificationRepository = new SpecificationRepository();

//services
const categoryService = new CategoryService(categoriesRepository);
const listCategoriesService = new ListCategoriesService(categoriesRepository);

const specificationService = new SpecificarionService(
  specificationRepository
);

//controllers
export const specificationController = new SpecificationController(
  specificationService
);

export const categoryController = new CreateCategoryController(categoryService);

export const listCategoriesController = new ListCategoriesController(
  listCategoriesService
);

console.log();
