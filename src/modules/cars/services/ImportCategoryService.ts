import fs from "fs";
import { parse } from "csv-parse";
import { CategoryRepository } from "../repositories/CategoryRepository";

interface IImportCategory {
  name: string;
  description: string;
}
export class ImportCategoryService {
  constructor(private categoriesRepository: CategoryRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    console.log(file);
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    console.log(categories);
  }
}
