import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { ProvidersModule } from './providers/providers.module';
import { EmployeesModule } from './employees/employees.module';
import { SitesModule } from './sites/sites.module';
import { SalesModule } from './sales/sales.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    ClientsModule,
    ProvidersModule,
    EmployeesModule,
    SitesModule,
    SalesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [Product],
      synchronize: true,
    })
  ],
})
export class AppModule {}
