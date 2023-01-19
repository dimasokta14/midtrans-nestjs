import {DynamicModule, Module} from '@nestjs/common';
import { MidtransConfig } from './interfaces';
import { MidtransCoreModule } from './midtrans-core.module';

@Module({})

export class MidtransModule {
  public static forRoot(options: MidtransConfig): DynamicModule {
    return {
      module: MidtransModule,
      imports: [MidtransCoreModule.forRoot(options)]
    }
  }
}
