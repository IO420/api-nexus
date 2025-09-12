import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  Login(@Body() user: CreateUserDto) {
    return this.userService.Login(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/validate-token')
  getProfile(@Request() req) {
    return req.user; 
  }

}
