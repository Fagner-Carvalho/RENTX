import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  // private specification: Specification[];
  // constructor() {
  //   this.specification = [];
  // }

  private repository: Repository<Specification>;
  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    // const specification = new Specification();
    // Object.assign(specification, {
    //   name,
    //   description,
    //   created_at: new Date(),
    // });
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByname(name: string): Promise<Specification> {
    // const specification = this.specification.find(
    //   (specification) => specification.name === name
    // );
    // return specification;

    const specification = this.repository.findOne({
      name,
    });
    return specification;
  }
}

export { SpecificationsRepository };
