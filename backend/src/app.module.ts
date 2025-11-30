import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the .env vars available everywhere
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', 
      url: process.env.DATABASE_URL, // Read the URL from .env
      autoLoadEntities: true, // Automatically find "User" entity
      synchronize: true, // Auto-create tables
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}