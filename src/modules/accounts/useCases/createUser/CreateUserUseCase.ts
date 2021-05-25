import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRespository.create({
      name,
      email,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
