import { Specification } from "../model/Specification";
import { SpecificationRepository } from "../repositories/SpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class SpecificarionService {
  constructor(private specificarionRepository: SpecificationRepository) {}

  execute(data: IRequest): void {
    const alreadyExists = this.specificarionRepository.findByName(data.name);
    if (alreadyExists) {
      throw new Error("Já existe uma especificação com este nome.");
    }
    this.specificarionRepository.create(data);
  }

  findAll(): Specification[] {
    return this.specificarionRepository.findAll();
  }
}
