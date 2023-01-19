export interface MidtransConfig {
    readonly api_key: string;
    readonly app_info: {
        name: string;
        url: string;
        version: string
    }
    readonly environtment?: 'SANDBOX' | 'PRODUCTION'
}