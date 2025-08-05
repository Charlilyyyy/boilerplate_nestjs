import { 
    Controller, 
    Get, 
    Post, 
    Put, 
    Delete, 
    Body, 
    Param, 
    HttpCode, 
    HttpStatus 
  } from '@nestjs/common';
  import { UserService } from '../services/user.service';
  import { CreateUserDto, UpdateUserDto, UserResponseDto } from '../dto/user.dto';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Get()
    async findAll(): Promise<UserResponseDto[]> {
      return this.userService.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id') id: string): Promise<UserResponseDto> {
      return this.userService.findById(id);
    }
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
      return this.userService.create(createUserDto);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUserDto,
    ): Promise<UserResponseDto> {
      return this.userService.update(id, updateUserDto);
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<void> {
      return this.userService.delete(id);
    }
  } 