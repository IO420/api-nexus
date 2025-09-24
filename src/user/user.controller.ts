import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto, Login } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async Login(@Body() data: Login, @Res() res: Response) {
    return this.userService.Login(data, res);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/validate-token')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('/create')
  async createUser(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }
}
//IO
