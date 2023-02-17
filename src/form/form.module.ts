import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [FormController],
  providers: [FormService],
  imports: [PrismaModule],
})
export class FormModule {}
