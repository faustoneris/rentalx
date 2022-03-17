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

  findByName(name: string): Specification {
    const specification = this.specifications.find((x) => x.name === name);

    return specification;
  }

  findAll(): Specification[] {
    return this.specifications;
  }
}
