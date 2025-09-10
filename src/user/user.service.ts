import { Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOneByName(nombre: string): Promise<User> {

    const user = await this.userRepository.findOne({
      where: { nombre }
    })

    if (!user) {
      throw new NotFoundException(
        `El usuario ${nombre} no fue encontrado`,
      );
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async Login(data: CreateUserDto) {
    const { username } = data

    if (!username) {
      throw new UnauthorizedException('Credenciales inválidas.');
    }

    const user = await this.findOneByName(username)
    return user
  }

}
