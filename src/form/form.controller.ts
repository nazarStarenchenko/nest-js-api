import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FormService } from './form.service';

@Controller('api')
export class FormController {
  constructor(private FormService: FormService) {}

  //dto - Data Transfer Object
  @Post('post')
  postUser(@Body() dto) {
    return this.FormService.postUser({ ...dto });
  }

  @Get('get')
  getAllUsers() {
    return this.FormService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.FormService.getUserById(+id);
  }

  @Delete(':id')
  removeUserById(@Param('id') id: string) {
    return this.FormService.removeUserById(+id);
  }
}
