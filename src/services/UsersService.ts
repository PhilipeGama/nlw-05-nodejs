import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { UsersRepository } from "../repositories/UsersRepository"


class  UsersService {
  private usersRepository: Repository<User>;

  constructor (){
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async findByEmail(email: string){
    const userExists = await this.usersRepository.findOne({
      email,
    })
    return userExists;
  }
  
  async create(email: string){
    
    //Verificar se o usuario existe
    const userExists = await this.usersRepository.findOne({
      email,
    })
    // Se não existir, salvar no BD
    if(userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);
    // Se exister, retornar user
    return user;
  }
}

export { UsersService }