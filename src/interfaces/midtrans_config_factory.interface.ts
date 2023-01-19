import { MidtransConfig } from "./midtrans_config.interface";

export interface MidtransConfigFactory {
    createMidtransConfig(): Promise<MidtransConfig | MidtransConfig>
}