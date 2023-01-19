import { Provider } from '@nestjs/common';
// import Stripe from 'stripe';
import { midtransToken } from './../constants';
import { MidtransConfig } from './../interfaces';
import { getMidtransClient } from './../util';

// export function createStripeProvider(options: MidtransConfig): Provider<Stripe> {
//   return {
//     provide: midtransToken,
//     useValue: getMidtransClient(options),
//   };
// }

export function createMidtransProvider(options: MidtransConfig): Provider<any> {
    return {
        provide: midtransToken,
        useValue: getMidtransClient(options),
    };
}