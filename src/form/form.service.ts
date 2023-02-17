import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class FormService {
  constructor(private prisma: PrismaService) {}

  async postUser(reqBody) {
    console.log(reqBody);
    const user = await this.prisma.user.create({
      data: {
        name: reqBody.name,
        email: reqBody.email,
        message: reqBody.message,
      },
    });
    return user;
  }

  getAllUsers() {
    return this.prisma.user.findMany();
  }

  getUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  removeUserById(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
