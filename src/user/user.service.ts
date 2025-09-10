import {
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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
  ) {}

  async findOneByNameandPassword(data: CreateUserDto): Promise<User> {
    const { usuario, password } = data;

    const user = await this.userRepository.findOne({
      where: { usuario, password },
    });

    if (!user) {
      throw new NotFoundException(`El usuario ${usuario} no fue encontrado`);
    }

    return user;
  }

  async Login(data: CreateUserDto) {
    return await this.findOneByNameandPassword(data);
  }
}
