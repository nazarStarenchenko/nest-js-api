import { Module } from '@nestjs/common';
import { FormModule } from './form/form.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), FormModule, PrismaModule],
})
export class AppModule {}
