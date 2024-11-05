import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { ProviderModule } from './provider/provider.module';
import { EmployeesModule } from './employees/employees.module';
import { SitesModule } from './sites/sites.module';
import { SalesModule } from './sales/sales.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductsModule,
    CustomersModule,
    ProviderModule,
    EmployeesModule,
    SitesModule,
    SalesModule,
    UsersModule,
  ],
})
export class AppModule {}
