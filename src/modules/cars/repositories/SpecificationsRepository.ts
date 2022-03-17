import { Specification } from "../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "./ISpecificationsRepository";

export class SpecificationRepository implements ISpecificationsRepository {
  constructor() {
    this.specifications = [];
  }

  private specifications: Specification[];

  create(data: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      data,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  //TODO: arrumar funçao findByName para retornar o nome da especificaçao
  findByName(name: string): Specification {
    const specification = this.specifications.find((x) => x.name == name);
    console.log(specification);

    return specification;
  }

  findAll(): Specification[] {
    return this.specifications;
  }
}
