import {MidtransConfig} from '../interfaces';

const packageJson = require('./../../package.json');

export function getMidtransClient({
    api_key,
    app_info = {
        name: packageJson.name,
        url: packageJson.repository,
        version: packageJson.version
    },
    ...config
}: MidtransConfig){
    const midtransClient = {
        api_key,
        app_info,
        ...config
    }

    return midtransClient
}