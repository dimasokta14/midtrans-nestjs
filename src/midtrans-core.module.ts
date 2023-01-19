
import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import { MidtransConfig } from './interfaces';
import { createMidtransProvider } from './providers';

@Module({})
export class MidtransCoreModule {
  public static forRoot(options: MidtransConfig): DynamicModule {
    const provider = createMidtransProvider(options);

    return {
      exports: [provider],
      module: MidtransCoreModule,
      providers: [provider]
    }
  }
}