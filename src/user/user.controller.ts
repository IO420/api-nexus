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
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async Login(@Body() data: CreateUserDto) {
    return this.userService.Login(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/validate-token')
  getProfile(@Request() req) {
    return req.user;
  }
}
//IO
